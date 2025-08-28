import {createTheme, Text} from '@mantine/core';


export const theme = createTheme({
    fontFamily: 'Oswald, sans-serif',
    fontSizes: {
        xs: "10px",
        sm: "11px",
        md: "14px",
        lg: "16px",
        xl: "25px",
    },
    components: {
        Text: Text.extend({
            defaultProps: {
                color: '#EAD7D1',
            },
        })
    },
});
