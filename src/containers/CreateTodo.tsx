import React, { FunctionComponent, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import CustomModal from "../components/CustomModal";

type CreateTodoProps = {
  createTodo: (title: string, description: string, dueDate?: Date) => void;
};

const CreateTodo: FunctionComponent<CreateTodoProps> = ({ createTodo }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const modalClose = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const onSuccessClick = () => {
    createTodo(title, description, new Date(dueDate));
    modalClose();
  };

  const renderModal = () => {
    return (
      <CustomModal
        disabled={!title || !description}
        open={open}
        onClose={modalClose}
        buttonText="Create"
        headerText="Create To Do"
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
      <Button onClick={() => setOpen(true)} primary>
        Create To Do
      </Button>
      {renderModal()}
    </>
  );
};

export default CreateTodo;
