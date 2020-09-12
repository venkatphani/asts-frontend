import React, { FunctionComponent } from "react";
import { Button, Modal } from "semantic-ui-react";

type ModalProps = {
  buttonText: string;
  headerText: string;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  disabled: boolean;
};

const CustomModal: FunctionComponent<ModalProps> = ({ buttonText, headerText, open, onClose, onSuccess, children, disabled }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header>{headerText}</Modal.Header>
      <Modal.Content>{children}</Modal.Content>
      <Modal.Actions>
        <Button primary onClick={onSuccess} disabled={disabled}>
          {buttonText}
        </Button>
        <Button color="black" onClick={onClose}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CustomModal;
