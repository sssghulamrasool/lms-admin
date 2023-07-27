import React, { useState } from "react";
import "./cours.css";
import Swal from "sweetalert2";
import ModalPopUP from "./modal";

const AddCourse = () => {
  const [sections, setSections] = useState([]);
  const [nameofSection, setnameofSection] = useState("");
  const [addCourseBtnDisable, setAddCourseBtnDisable] = useState(false);
  const [sectionNameId, setSectionNameId] = useState({});
  const hanldeAddSection = () => {
    if (nameofSection.trim() <= 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Section Name is required",
      });
    } else {
      let sectionObjected = {
        id: `${nameofSection.toLowerCase().split(" ").join("-")}-${Math.trunc(
          Math.random() * 1e9
        )}`,
        name: nameofSection,
        curricum: false,
      };

      setSections([...sections, sectionObjected]);
      setnameofSection("");
    }
  };

  const hanlderRemoveLecture = (id, name) => {
    let arr = sections.filter((e) => e.id !== id);
    setSections(arr);
  };
  const hanldeEditLecture = (e) => {
    let arar = sections.map((elment) => {
      if (elment.id === e.id) {
        setnameofSection(e.name);
        return { ...elment, curricum: true };
      } else {
        return { ...elment, curricum: false };
      }
    });
    setAddCourseBtnDisable(true);
    setSections(arar);
  };
  const hanldeSaveLecture = (e) => {
    let arar = sections.map((elment) => {
      if (elment.id === e.id) {
        return { ...elment, curricum: false, name: nameofSection };
      } else {
        return { ...elment, curricum: false };
      }
    });
    setSections(arar);
    setnameofSection("");
    setAddCourseBtnDisable(false);
  };

  const hanldeCurricumOpend = (e) => {
    setSectionNameId({
      name: e.name,
      id: e.id,
    });
  };

  const hanldeChanged = (e) => {
    setnameofSection(e.target.value);
  };
  return (
    <div className="container-xxl">
      <div className="row ">
        <div className="col-6 m-auto">
          <h3>Add new course detail</h3>
          <div className="d-flex justify-contnet-between align-items-center">
            <input
              type="text"
              placeholder="Mongodb"
              className="form-control w-75 rounded-0"
              value={nameofSection}
              onChange={hanldeChanged}
            />
            <button
              className="btn btn-danger text-capitalize border-0 rounded-0 w-25 ms-2"
              onClick={hanldeAddSection}
              disabled={addCourseBtnDisable ? true : false}
            >
              add course
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 m-auto">
          <div className="wrapper">
            {sections.length >= 1 ? (
              sections.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={`d-flex align-items-center justify-content-between min-box mt-3 border  ${
                      e.curricum
                        ? "border-info bg-info"
                        : "border-secondary-subtle"
                    }`}
                  >
                    <div>
                      <p className="heading">
                        {i + 1} - {e.name}
                      </p>
                    </div>
                    <div className="action-btn">
                      <span
                        className="rounded-0 btn btn-dark"
                        onClick={() => hanlderRemoveLecture(e.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                      {e.curricum ? (
                        <span
                          className="rounded-0 btn btn-success  mx-2"
                          onClick={() => hanldeSaveLecture(e)}
                        >
                          <i className="fa-solid fa-check"></i>
                        </span>
                      ) : (
                        <span
                          className="rounded-0 btn btn-danger  mx-2"
                          onClick={() => hanldeEditLecture(e)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </span>
                      )}
                      <span
                        className="rounded-0 btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => hanldeCurricumOpend(e)}
                      >
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="section">
                <div className="d-flex align-items-center justify-content-between  mt-3">
                  <p className="heading"> No section </p>
                </div>
              </div>
            )}
          </div>
          <ModalPopUP section={sectionNameId} />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
