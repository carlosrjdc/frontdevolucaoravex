import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function PopUpModal({
  confirmar,
  fechar,
  titulo,
  corpo,
  disabilitar,
}) {
  const handleClose = () => fechar();
  const handleConfirm = () => confirmar();

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{corpo}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            disabled={disabilitar}
            onClick={handleConfirm}
            variant="primary"
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
