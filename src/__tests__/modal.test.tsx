import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '@/components/Modal';


describe('Modal component', () => {
    it('opens the modal when the button is clicked', () => {

        render(
            <Modal emojis={[]} />
        );

        const buttonElement = screen.getByText('Emojis List');
        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement);


        expect(screen.getByText('ID')).toBeInTheDocument();

    });
});


