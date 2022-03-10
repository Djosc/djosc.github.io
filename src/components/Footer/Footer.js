import React, { useState } from 'react';

import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

import {
	FooterContainer,
	FooterWrap,
	FooterInfo,
	FooterLinksWrap,
	FooterLinkItems,
	FooterLink,
	FooterContactWrap,
	FooterContact,
	FormLabel,
	FormInput,
	FormInputArea,
	FormH1,
	BtnWrap,
	Gh,
	Li,
	Tw,
	Med,
	LocationIcon,
	EmailIcon,
} from './FooterElements';

import { Button } from '../Button/Button';

const Footer = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);

	// init(process.env.REACT_APP_User_ID);

	const submit = () => {
		if (name && email && message) {
			const serviceId = 'service_58slowi';
			const templateId = 'template_vg7h2in';
			const templateParams = {
				name,
				email,
				subject,
				message,
			};

			if (isValidEmail(email)) {
				emailjs
					.send(serviceId, templateId, templateParams, process.env.REACT_APP_User_ID)
					.then((response) => {
						console.log(response);
						alert(
							'Thank you for your message. I will get back with you as soon as possible.'
						);
					})
					.catch((error) => console.log(error));
			}

			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
			setEmailSent(true);
		} else {
			alert('Please fill in all fields');
		}
	};

	const isValidEmail = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	};

	const openGitHub = () => {
		const url = 'https://github.com/Djosc';
		window.open(url, '_blank');
	};

	const openLinkedIn = () => {
		const url = 'https://www.linkedin.com/in/djosc/';
		window.open(url, '_blank');
	};

	const openTwitter = () => {
		const url = 'https://twitter.com/DavidWebDev';
		window.open(url, '_blank');
	};

	const openMedium = () => {
		const url = 'https://medium.com/@davidjoscaldwell';
		window.open(url, '_blank');
	};

	return (
		<>
			<FooterContainer id="contact">
				<FooterWrap>
					<FooterInfo>
						<h1>Need to talk to me?</h1>
						<p>I would love to hear from you.</p>
						<div style={{ height: '34px' }}></div>
						<p>David Caldwell</p>
						<p>
							<LocationIcon />
							Dayton, Ohio
						</p>
						<p>
							<EmailIcon />
							davidjoscaldwell@gmail.com
						</p>
						<FooterLinksWrap>
							<FooterLinkItems>
								<Gh onClick={openGitHub} />
								<Li onClick={openLinkedIn} />
								<Tw onClick={openTwitter} />
								<Med onClick={openMedium} />
							</FooterLinkItems>
						</FooterLinksWrap>
					</FooterInfo>
					<FooterContactWrap>
						<FooterContact>
							<FormH1>Send me an email</FormH1>
							<FormInput
								type="text"
								placeholder="Your Name"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<FormInput
								type="email"
								placeholder="Your Email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<FormInput
								type="text"
								placeholder="Subject"
								name="subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
							/>
							<FormInputArea
								type="text"
								placeholder="Message"
								name="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							<BtnWrap>
								<Button primary="true" dark="true" big="true" onClick={submit}>
									Send
								</Button>
							</BtnWrap>
						</FooterContact>
					</FooterContactWrap>
				</FooterWrap>
			</FooterContainer>
		</>
	);
};

export default Footer;
