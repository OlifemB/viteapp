import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import Main from './main';


describe('<App />', () => {
    describe('Rendering', () => {
        it('Should render without throwing', () => {
            render(<Main/>);
            expect(screen.getByText('Vite + React')).toBeInTheDocument();
        });
    });
});
