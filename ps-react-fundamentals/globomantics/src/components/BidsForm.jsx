import { useActionState, useState } from 'react';
import { useTimeMessage } from '../hooks/useTimeMessage';

export const BidsForm = ({ addBid }) => {
  const [formRef, setFormRef] = useState(null);
  const { message, showMessage } = useTimeMessage();

  const [state, formAction, isPending] = useActionState(
    async (previousState, formData) => {
      try {
        await addBid({
          bidder: formData.get('bidder'),
          amount: formData.get('amount'),
        });

        if (formRef) {
          formRef.reset();
        }

        showMessage('bid saved with success', 'success');

        return { success: true };
      } catch (error) {
        console.log(error);
        showMessage('error on save bid', 'danger');
        return { success: false };
      }
    },
    { success: null, message: '' }
  );

  /* const bidSubmitAction = async (formData) => {
    await addBid({
      bidder: formData.get('bidder'),
      amount: formData.get('amount'),
    });
  };
 */
  return (
    <form formRef={setFormRef} action={formAction}>
      <div className="d-flex flex-row gap-3 m-0 mt-3">
        <div className="flex-fill ">
          <label htmlFor="bidder" className="form-label">
            Bidder
          </label>
          <input
            type="text"
            required
            autoComplete="off"
            className="form-control"
            name="bidder"
            id="bidder"
            placeholder="Bidder"
            disabled={isPending} // Desabilita durante loading
          />
        </div>
        <div>
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            required
            autoComplete="off"
            className="form-control"
            placeholder="0"
            name="amount"
            id="amount"
            disabled={isPending}
          />
        </div>
        <div className="d-flex align-items-end">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isPending}
          >
            {isPending ? 'Adicionando...' : 'Add'}
          </button>
        </div>
      </div>

      {message.visible && (
        <div className={`alert alert-${message.type} mt-2`}>{message.text}</div>
      )}
    </form>
  );
};
