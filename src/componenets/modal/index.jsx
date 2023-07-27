import React, { useState } from "react";

const ModalPopUP = ({ section }) => {
  const [lectures, setLectures] = useState([]);
  const [lectureAdd, setLectureAdd] = useState({
    name: "",
    url: "",
    file: "",
  });
  const hanldeAddLecture = () => {
    let lectureObjected = {
      parentId: section.id,
      ...lectureAdd,
    };
    setLectures([...lectures, lectureObjected]);
  };

  const hanldeSubtmit = () => {
    console.log("submitedd");
  };
  const hanldeChanged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLectureAdd({ ...lectureAdd, [name]: value });
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h1
                className="modal-title text-capitalize fs-5"
                id="exampleModalLabel"
              >
                {section.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3">
                <input
                  type="text"
                  className="form-control rounded-0   d-inline-block"
                  placeholder="name"
                  name="name"
                  value={lectureAdd.name}
                  onChange={hanldeChanged}
                />
                <input
                  type="file"
                  className="form-control mx-3  rounded-0 d-inline-block"
                  name="file"
                  onChange={hanldeChanged}
                />
                <input
                  type="text"
                  placeholder="url"
                  name="url"
                  value={lectureAdd.url}
                  onChange={hanldeChanged}
                  className="form-control   rounded-0 d-inline-block"
                />
              </div>
              <button
                className="btn btn-success w-25 float-end rounded-0 mb-3 me-auto"
                onClick={hanldeAddLecture}
              >
                Add Lecture
              </button>

              <div className="lecture-detail border ">
                <div className=" lecture-wrap">
                  {lectures.length >= 1 ? (
                    lectures.map((element, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex align-items-center justify-content-between mb-1 py-1 px-2 lecture-item"
                        >
                          <div>
                            <h4 className="heading">{element.name}</h4>
                          </div>
                          <div>
                            <span className="rounded-0 mx-2 btn btn-danger">
                              <i className="fa-solid fa-pen"></i>
                            </span>
                            <span className="rounded-0 mx-2 btn btn-success">
                              <i className="fa-solid fa-check"></i>
                            </span>

                            <span className="rounded-0 btn btn-dark">
                              <i className="fa-solid fa-trash"></i>
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h3 className="p-0 m-0"> No Lecture</h3>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary rounded-0"
                onClick={hanldeSubtmit}
              >
                Add Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopUP;
