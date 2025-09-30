import { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Center, Grid, Group, Paper, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import classes from './Contact.module.css';


export function Contact() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      fullName: '',
      email: '',
      message: '',
    },

    validate: {
      fullName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length < 1 ? 'Message must not be empty' : null),
    },
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const handleRecaptchaChange = (value:any) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = (values: any) => {
    if (!recaptchaToken) {
          notifications.show({
            title: 'Error',
            message: 'Please complete the reCAPTCHA.',
            color: 'red',
          });
          return;
        }
    const templateParams = {
          ...values,
          'g-recaptcha-response': recaptchaToken, // Key for EmailJS reCAPTCHA verification
        };
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        notifications.show({
          title: 'Success!',
          message: 'Your message has been sent.',
          color: 'green',
        });
        form.reset(); // Reset form after successful submission
      })
      .catch((error) => {
        notifications.show({
          title: 'Error',
          message: `Failed to send your message. ${error}`,
          color: 'red',
        });
      });
  };
  return (
    <Paper className={classes.paperHeight}>
      <div className={classes.textHxVCenter}>
        <Grid>
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <div>
              <Center>
                <h1>Get in Touch</h1>
              </Center>
            </div>
            <Text>
              I am always open to new opportunities and challenges. If you have any questions or
              would like to work together, please don't hesitate to reach out.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <form onReset={form.onReset} onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                withAsterisk
                label="Full Name"
                placeholder="Your Full Name"
                key={form.key('fullName')}
                {...form.getInputProps('fullName')}
              />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                key={form.key('email')}
                {...form.getInputProps('email')}
              />

              <Textarea
                withAsterisk
                autosize
                resize="vertical"
                minRows={5}
                label="Message"
                placeholder="Your message"
                key={form.key('message')}
                {...form.getInputProps('message')}
              />

              <Group justify="flex-end" mt={0}>
                <Button className={classes.contactSubmitButton} type="submit">
                  Submit
                </Button>
                <Button className={classes.contactResetButton} type="reset" color="red">
                  Reset
                </Button>
              </Group>
              <Group justify="flex-end" mt="md">
                <ReCAPTCHA
                  className={classes.gRecaptchaSmall}
                  sitekey="6LdjVtkrAAAAAEwI8VB3KkslezET1Vb97PA1U3m-"
                  onChange={handleRecaptchaChange}
                  theme="dark"
                  size="invisible"
                  badge="inline"
                />
              </Group>
            </form>
          </Grid.Col>
        </Grid>
      </div>
    </Paper>
  );
}
