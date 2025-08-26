import {createTheme, Text} from '@mantine/core';

export const theme = createTheme({
    components: {
        Text: Text.extend({
            defaultProps: {
                color: 'cyan',
            },
        })
    },
});
