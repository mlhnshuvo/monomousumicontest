import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../../../store/actions/gradeAction";
import Filter from "./Filter";
import GradeSelection from "./GradeSelection";
import GradeInput from "./GradeInput";
import GradeUpdate from "./GradeUpdate";
import Modal from "../../Modal";

const Index = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const gradeReducer = useSelector((store) => store.gradeReducer);

  const modalHandler = (value) => {
    dispatch(modalToggle(value));
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Filter modalHandler={modalHandler} onChangeHandler={onChangeHandler} />
      {gradeReducer.modal &&
        (gradeReducer.updateId ? (
          <Modal
            modal={gradeReducer.modal}
            modalHandler={modalHandler}
            title="Update Grade"
          >
            <GradeUpdate />
          </Modal>
        ) : (
          <Modal
            modal={gradeReducer.modal}
            modalHandler={modalHandler}
            title="Add Grade"
          >
            <GradeInput />
          </Modal>
        ))}

      <GradeSelection value={value} />
    </div>
  );
};

export default Index;
