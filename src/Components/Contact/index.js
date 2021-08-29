import React from 'react';

import { DropSection, DropTitle, Span, Form, InputText, InputEmail, InputExp, InputSub, TextArea, FormInput } from './style.js';
import Footer from '../Footer/index.js';

const Contact = () => {
    return (
        <React.Fragment>
            <DropSection>
                <div className="container">
                    <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                    <Form action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>
                        <InputExp type="text" className="sub" placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSub type="submit" value="Send Message" />
                    </Form>
                </div>
            </DropSection>
            <Footer />
        </React.Fragment>
    )
}

export default Contact