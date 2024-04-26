import React from "react";

function MapExample() {
	return (
		<>
			<div className="relative w-full rounded h-600-px">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5194691566435!2d106.82049517409588!3d-6.1949797606896935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5561518a139%3A0x2911f3a14f98eea7!2sBundaran%20HI!5e0!3m2!1sen!2sid!4v1713108323828!5m2!1sen!2sid"
					width="100%"
					height="600"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</>
	);
}

export default MapExample;
