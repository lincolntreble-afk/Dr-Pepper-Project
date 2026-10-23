import '../About/WhereToFindSection.css'


function WhereToFindSection() {
    return (
        <>
            <section className="where-to-find-section">
                <div className="where-to-find-section-container">
                    <div className="where-to-header-container">
                        <p className="where-to-header">Where to find us</p>
                    </div>

                    <div className="where-to-find-information-container">
                        <div className="where-to-find-information-left-section">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9924.569600551167!2d-0.4876836861255293!3d51.547287791185106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e70a23fea9f%3A0x11b6fca486520b9e!2sUxbridge%20UB8%201EZ!5e0!3m2!1sen!2suk!4v1792770804536!5m2!1sen!2suk"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowfullScreen=""
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>

                        <div className="where-to-find-infromation-right-section">
                            <div className="address-container">
                                <p className="address">Adress:</p>
                                <p className="address-sub-text-1">
                                    Coca-Cola Europacific Partners, Enterprises
                                    House, Bakers Road, Uxbridge
                                </p>
                                <p className="address-sub-text-2">
                                    UB8 1EZ, United Kingdom
                                </p>
                            </div>

                            <div className="contact-info-container">
                                <div className="consumer-care-container">
                                    <i className="ri-phone-fill phone-icon"></i>
                                    <div className="business-info">
                                        <p className="consumer-care-number">
                                            +44 (0)1895 231313 (Consumer Care)
                                        </p>
                                        <p className="business-enquiries-number">
                                            0808 1 000 000 (Business Enquiries)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="email-info-container">
                                <div className="email-icon-text-container">
                                    <i class="ri-mail-fill email-icon"></i>
                                    <div className="email-container">
                                        <p className="email">
                                            connect@ccep.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="direction-info-container">
                                <div className="direction-icon-text-container">
                                    <i class="ri-direction-fill direction-icon"></i>
                                    <div className="direction-container">
                                        <p className="direction">
                                            Situated in Uxbridge town centre,
                                            directly accessible via the A4020
                                            and a short walk from the Uxbridge
                                            Underground Station.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhereToFindSection;
