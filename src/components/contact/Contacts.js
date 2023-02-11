import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'


const Contacts = () => {
	return (
		<section id='contact-id' className='container contact'>
			<h1 className='headings'>Contact Me!</h1>

			<div className="contact-icons">
				<div>
					<a href="tel:+91 9557201605">
						<BsFillTelephoneFill />
					</a>
					<p>+91 80706325710</p>
				</div>
				<div>
					<a href="mailto:princekumarcodes@gmail.com">
						<MdEmail />
					</a>
					<p>princekumarcodes@gmail.com</p>
				</div>
			</div>
		</section>
	);
};

export default Contacts;