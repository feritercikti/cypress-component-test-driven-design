import Modal from './Modal'
import {MouseEvent} from 'react'

type ModalYesNoProps = {
  message: string
  onYes: (e: MouseEvent<HTMLButtonElement>) => void
  onNo: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function ModalYesNo({message, onYes, onNo}: ModalYesNoProps) {
  return (
    <Modal>
      <div
        data-cy="modal-yes-no"
        data-testid="modal-yes-no"
        className="modal-is-active"
      >
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Confirm</p>
          </header>
          <section className="modal-card-body">{message}</section>
          <footer className="modal-card-foot card-footer">
            <button
              data-cy="button-no"
              data-testid="button-no"
              className="button-modal-no"
              onClick={onNo}
            >
              No
            </button>
            <button
              data-cy="button-yes"
              data-testid="button-yes"
              className="button is-primary modal-yes"
              onClick={onYes}
            >
              Yes
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  )
}
