import React, { FunctionComponent, useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import CustomModal from "../components/CustomModal";

type EditTodoProps = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  editTodo: (id: number, title: string, description: string, dueDate?: Date) => void;
};

const EditTodo: FunctionComponent<EditTodoProps> = ({ editTodo, id, title: oldTitle, description: oldDescription, dueDate: oldDate }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    setDefault(oldTitle, oldDescription, oldDate);
  }, [oldTitle, oldDescription, oldDate]);

  const setDefault = (localTitle: string, localDescription: string, localDate: string) => {
    setTitle(localTitle);
    setDescription(localDescription);
    setDueDate(localDate ? new Date(localDate).toISOString().slice(0, 10) : "");
  };

  const modalClose = () => {
    setOpen(false);
    setDefault(oldTitle, oldDescription, oldDate);
  };

  const onSuccessClick = () => {
    editTodo(id, title, description, new Date(dueDate));
    modalClose();
  };

  const renderModal = () => {
    return (
      <CustomModal
        disabled={!title || !description}
        open={open}
        onClose={modalClose}
        buttonText="Edit"
        headerText="Edit To Do"
        onSuccess={onSuccessClick}
      >
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Due Date</label>
            <input type="date" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </Form.Field>
        </Form>
      </CustomModal>
    );
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} color="yellow">
        Edit
      </Button>
      {renderModal()}
    </>
  );
};

export default EditTodo;
