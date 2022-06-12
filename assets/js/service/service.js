const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

export var serviceHTML = () => {
    // class query root in html
    const root = $('.root')
    const service = $('#service')
    service.addEventListener('click', (e) => {
        root.innerHTML = `
        <div class="service">
            <div class="flex-center">
                <div class="push-6"></div>
                <div class="body-85">
                    <div class="content__heading">
                        <h2 class="content__heading-title">CÁC DỊCH VỤ CỦA CHÚNG TÔI</h2>
                        <p class="content__heading-des">Giúp cho Doanh Nghiệp sở hữu được Website chuyên nghiệp, đi đầu trong
                            lĩnh vực bán hàng Online. Cùng các giải pháp công nghệ khác qua các dịch vụ sau:</p>
                    </div>
                    <div class="content__service-list">
                        <div class="service__list-item">
                            <div class="service__img"> 
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.25 17.74C3.64 18.13 4.27 18.13 4.66 17.74L5.05 17.35C5.23491 17.164 5.33869 16.9123 5.33869 16.65C5.33869 16.3877 5.23491 16.136 5.05 15.95L5.04 15.94C4.94749 15.8473 4.8376 15.7737 4.71662 15.7236C4.59565 15.6734 4.46597 15.6476 4.335 15.6476C4.20403 15.6476 4.07435 15.6734 3.95338 15.7236C3.8324 15.7737 3.72251 15.8473 3.63 15.94L3.24 16.33C2.86 16.73 2.86 17.35 3.25 17.74ZM10.99 20.95H11C11.55 20.95 11.99 20.51 11.99 19.96V19C11.99 18.45 11.55 18.01 11 18.01H10.99C10.44 18.01 10 18.45 10 19V19.96C10 20.51 10.44 20.95 10.99 20.95ZM2.01 9H0.99C0.44 9 0 9.44 0 9.99V10C0 10.55 0.44 10.99 0.99 10.99H2C2.55 10.99 2.99 10.55 2.99 10V9.99C2.99255 9.86014 2.96901 9.73108 2.92079 9.61047C2.87257 9.48987 2.80064 9.38016 2.70926 9.28785C2.61789 9.19554 2.50892 9.1225 2.3888 9.07306C2.26869 9.02361 2.13988 8.99877 2.01 9ZM14 4.81V1C14 0.45 13.55 0 13 0H9C8.45 0 8 0.45 8 1V4.81C6.94935 5.41598 6.10698 6.32611 5.58393 7.42041C5.06088 8.51471 4.8817 9.74183 5.07 10.94C5.47 13.55 7.63 15.64 10.25 15.96C13.89 16.4 17 13.56 17 10.01C17 7.78 15.79 5.85 14 4.81ZM19 9.99V10C19 10.55 19.44 10.99 19.99 10.99H21C21.55 10.99 21.99 10.55 21.99 10V9.99C21.99 9.44 21.55 9 21 9H19.99C19.44 9 19 9.44 19 9.99ZM16.94 17.36L17.33 17.75C17.517 17.937 17.7706 18.042 18.035 18.042C18.2994 18.042 18.553 17.937 18.74 17.75C18.927 17.563 19.032 17.3094 19.032 17.045C19.032 16.7806 18.927 16.527 18.74 16.34L18.35 15.95C18.164 15.7651 17.9123 15.6613 17.65 15.6613C17.3877 15.6613 17.136 15.7651 16.95 15.95C16.55 16.35 16.55 16.97 16.94 17.36Z" fill="#FEB139"/>
                                    </svg>                         
                            </div>
                            <p class="service__heading">Thiết kế Website</p>
                            <p class="service__des">Đi đầu công nghệ, dịch vụ thiết kế 
                                Website chuyên nghiệp của chúng
                                tôi giúp cho Doanh Nghiệp tìm được nhiều
                                khách hàng hơn, gia tăng doanh số.</p>
                            <div class="service__btn">
                                <div class="service__btn-icon">
                                    <i class="fa-solid fa-angle-right"></i>

                                </div>
                                <div class="service__btn-text">Chi Tiết</div>
                            </div>
                        </div>
                        <div class="service__list-item">
                            <div class="service__img"> 
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 14.5H0V15H0.5V14.5ZM6.5 5.5L6.9 5.2C6.85199 5.13605 6.78935 5.08455 6.71732 5.04981C6.64529 5.01508 6.56598 4.99813 6.48605 5.00038C6.40612 5.00263 6.32789 5.02403 6.25793 5.06276C6.18798 5.1015 6.12833 5.15645 6.084 5.223L6.5 5.5ZM9.5 9.5L9.1 9.8C9.14721 9.86287 9.20858 9.91373 9.27913 9.94844C9.34968 9.98314 9.42742 10.0007 9.50604 9.99975C9.58466 9.99878 9.66194 9.97928 9.7316 9.94283C9.80127 9.90639 9.86136 9.85403 9.907 9.79L9.5 9.5ZM0 0V14.5H1V0H0ZM0.5 15H15V14H0.5V15ZM2.916 11.777L6.916 5.777L6.084 5.223L2.084 11.223L2.916 11.777ZM6.1 5.8L9.1 9.8L9.9 9.2L6.9 5.2L6.1 5.8ZM9.907 9.79L14.907 2.79L14.093 2.21L9.093 9.21L9.907 9.79Z" fill="#F55353"/>
                                    </svg>
                                                             
                            </div>
                            <p class="service__heading">Quảng Cáo Google Ads</p>
                            <p class="service__des">QC Google của TBAY là sự kết hợp của các
                                chuyên gia với kinh nghiệm triển khai hơn
                                10.000 chiến dịch QC và hệ thống Machine 
                               Learning của Google.</p>
                            <div class="service__btn">
                                <div class="service__btn-icon">
                                    <i class="fa-solid fa-angle-right"></i>

                                </div>
                                <div class="service__btn-text">Chi Tiết</div>
                            </div>
                        </div>
                        <div class="service__list-item">
                            <div class="service__img"> 
                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H10V14H2V4L10 9L18 4V9H20V2C20 0.9 19.1 0 18 0ZM10 7L2 2H18L10 7ZM15.34 18L11.8 14.46L13.21 13.05L15.33 15.17L19.57 10.93L21 12.34L15.34 18Z" fill="#143F6B"/>
                                    </svg>
                                                           
                            </div>
                            <p class="service__heading">Email doanh nghiệp</p>
                            <p class="service__des">Với các gói email doanh nghiệp bảo mật 
                                cao, không bị spam, gửi nhận ổn định. 
                                Giúp tăng uy tín cho các công ty, doanh
                                nghiệp.</p>
                            <div class="service__btn">
                                <div class="service__btn-icon">
                                    <i class="fa-solid fa-angle-right"></i>

                                </div>
                                <div class="service__btn-text">Chi Tiết</div>
                            </div>
                        </div>
                        <div class="service__list-item">
                            <div class="service__img"> 
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.25 17.74C3.64 18.13 4.27 18.13 4.66 17.74L5.05 17.35C5.23491 17.164 5.33869 16.9123 5.33869 16.65C5.33869 16.3877 5.23491 16.136 5.05 15.95L5.04 15.94C4.94749 15.8473 4.8376 15.7737 4.71662 15.7236C4.59565 15.6734 4.46597 15.6476 4.335 15.6476C4.20403 15.6476 4.07435 15.6734 3.95338 15.7236C3.8324 15.7737 3.72251 15.8473 3.63 15.94L3.24 16.33C2.86 16.73 2.86 17.35 3.25 17.74ZM10.99 20.95H11C11.55 20.95 11.99 20.51 11.99 19.96V19C11.99 18.45 11.55 18.01 11 18.01H10.99C10.44 18.01 10 18.45 10 19V19.96C10 20.51 10.44 20.95 10.99 20.95ZM2.01 9H0.99C0.44 9 0 9.44 0 9.99V10C0 10.55 0.44 10.99 0.99 10.99H2C2.55 10.99 2.99 10.55 2.99 10V9.99C2.99255 9.86014 2.96901 9.73108 2.92079 9.61047C2.87257 9.48987 2.80064 9.38016 2.70926 9.28785C2.61789 9.19554 2.50892 9.1225 2.3888 9.07306C2.26869 9.02361 2.13988 8.99877 2.01 9ZM14 4.81V1C14 0.45 13.55 0 13 0H9C8.45 0 8 0.45 8 1V4.81C6.94935 5.41598 6.10698 6.32611 5.58393 7.42041C5.06088 8.51471 4.8817 9.74183 5.07 10.94C5.47 13.55 7.63 15.64 10.25 15.96C13.89 16.4 17 13.56 17 10.01C17 7.78 15.79 5.85 14 4.81ZM19 9.99V10C19 10.55 19.44 10.99 19.99 10.99H21C21.55 10.99 21.99 10.55 21.99 10V9.99C21.99 9.44 21.55 9 21 9H19.99C19.44 9 19 9.44 19 9.99ZM16.94 17.36L17.33 17.75C17.517 17.937 17.7706 18.042 18.035 18.042C18.2994 18.042 18.553 17.937 18.74 17.75C18.927 17.563 19.032 17.3094 19.032 17.045C19.032 16.7806 18.927 16.527 18.74 16.34L18.35 15.95C18.164 15.7651 17.9123 15.6613 17.65 15.6613C17.3877 15.6613 17.136 15.7651 16.95 15.95C16.55 16.35 16.55 16.97 16.94 17.36Z" fill="#FEB139"/>
                                    </svg>                         
                            </div>
                            <p class="service__heading">Thiết kế Website</p>
                            <p class="service__des">Đi đầu công nghệ, dịch vụ thiết kế 
                                Website chuyên nghiệp của chúng
                                tôi giúp cho Doanh Nghiệp tìm được nhiều
                                khách hàng hơn, gia tăng doanh số.</p>
                            <div class="service__btn">
                                <div class="service__btn-icon">
                                    <i class="fa-solid fa-angle-right"></i>

                                </div>
                                <div class="service__btn-text">Chi Tiết</div>
                            </div>
                        </div>
                        <div class="service__list-item">
                            <div class="service__img"> 
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.25 17.74C3.64 18.13 4.27 18.13 4.66 17.74L5.05 17.35C5.23491 17.164 5.33869 16.9123 5.33869 16.65C5.33869 16.3877 5.23491 16.136 5.05 15.95L5.04 15.94C4.94749 15.8473 4.8376 15.7737 4.71662 15.7236C4.59565 15.6734 4.46597 15.6476 4.335 15.6476C4.20403 15.6476 4.07435 15.6734 3.95338 15.7236C3.8324 15.7737 3.72251 15.8473 3.63 15.94L3.24 16.33C2.86 16.73 2.86 17.35 3.25 17.74ZM10.99 20.95H11C11.55 20.95 11.99 20.51 11.99 19.96V19C11.99 18.45 11.55 18.01 11 18.01H10.99C10.44 18.01 10 18.45 10 19V19.96C10 20.51 10.44 20.95 10.99 20.95ZM2.01 9H0.99C0.44 9 0 9.44 0 9.99V10C0 10.55 0.44 10.99 0.99 10.99H2C2.55 10.99 2.99 10.55 2.99 10V9.99C2.99255 9.86014 2.96901 9.73108 2.92079 9.61047C2.87257 9.48987 2.80064 9.38016 2.70926 9.28785C2.61789 9.19554 2.50892 9.1225 2.3888 9.07306C2.26869 9.02361 2.13988 8.99877 2.01 9ZM14 4.81V1C14 0.45 13.55 0 13 0H9C8.45 0 8 0.45 8 1V4.81C6.94935 5.41598 6.10698 6.32611 5.58393 7.42041C5.06088 8.51471 4.8817 9.74183 5.07 10.94C5.47 13.55 7.63 15.64 10.25 15.96C13.89 16.4 17 13.56 17 10.01C17 7.78 15.79 5.85 14 4.81ZM19 9.99V10C19 10.55 19.44 10.99 19.99 10.99H21C21.55 10.99 21.99 10.55 21.99 10V9.99C21.99 9.44 21.55 9 21 9H19.99C19.44 9 19 9.44 19 9.99ZM16.94 17.36L17.33 17.75C17.517 17.937 17.7706 18.042 18.035 18.042C18.2994 18.042 18.553 17.937 18.74 17.75C18.927 17.563 19.032 17.3094 19.032 17.045C19.032 16.7806 18.927 16.527 18.74 16.34L18.35 15.95C18.164 15.7651 17.9123 15.6613 17.65 15.6613C17.3877 15.6613 17.136 15.7651 16.95 15.95C16.55 16.35 16.55 16.97 16.94 17.36Z" fill="#FEB139"/>
                                    </svg>                         
                            </div>
                            <p class="service__heading">Thiết kế Website</p>
                            <p class="service__des">Đi đầu công nghệ, dịch vụ thiết kế 
                                Website chuyên nghiệp của chúng
                                tôi giúp cho Doanh Nghiệp tìm được nhiều
                                khách hàng hơn, gia tăng doanh số.</p>
                            <div class="service__btn">
                                <div class="service__btn-icon">
                                    <i class="fa-solid fa-angle-right"></i>

                                </div>
                                <div class="service__btn-text">Chi Tiết</div>
                            </div>
                        </div>
                        <div class="service__list-item">
                            <div class="service__img"> 
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.25 17.74C3.64 18.13 4.27 18.13 4.66 17.74L5.05 17.35C5.23491 17.164 5.33869 16.9123 5.33869 16.65C5.33869 16.3877 5.23491 16.136 5.05 15.95L5.04 15.94C4.94749 15.8473 4.8376 15.7737 4.71662 15.7236C4.59565 15.6734 4.46597 15.6476 4.335 15.6476C4.20403 15.6476 4.07435 15.6734 3.95338 15.7236C3.8324 15.7737 3.72251 15.8473 3.63 15.94L3.24 16.33C2.86 16.73 2.86 17.35 3.25 17.74ZM10.99 20.95H11C11.55 20.95 11.99 20.51 11.99 19.96V19C11.99 18.45 11.55 18.01 11 18.01H10.99C10.44 18.01 10 18.45 10 19V19.96C10 20.51 10.44 20.95 10.99 20.95ZM2.01 9H0.99C0.44 9 0 9.44 0 9.99V10C0 10.55 0.44 10.99 0.99 10.99H2C2.55 10.99 2.99 10.55 2.99 10V9.99C2.99255 9.86014 2.96901 9.73108 2.92079 9.61047C2.87257 9.48987 2.80064 9.38016 2.70926 9.28785C2.61789 9.19554 2.50892 9.1225 2.3888 9.07306C2.26869 9.02361 2.13988 8.99877 2.01 9ZM14 4.81V1C14 0.45 13.55 0 13 0H9C8.45 0 8 0.45 8 1V4.81C6.94935 5.41598 6.10698 6.32611 5.58393 7.42041C5.06088 8.51471 4.8817 9.74183 5.07 10.94C5.47 13.55 7.63 15.64 10.25 15.96C13.89 16.4 17 13.56 17 10.01C17 7.78 15.79 5.85 14 4.81ZM19 9.99V10C19 10.55 19.44 10.99 19.99 10.99H21C21.55 10.99 21.99 10.55 21.99 10V9.99C21.99 9.44 21.55 9 21 9H19.99C19.44 9 19 9.44 19 9.99ZM16.94 17.36L17.33 17.75C17.517 17.937 17.7706 18.042 18.035 18.042C18.2994 18.042 18.553 17.937 18.74 17.75C18.927 17.563 19.032 17.3094 19.032 17.045C19.032 16.7806 18.927 16.527 18.74 16.34L18.35 15.95C18.164 15.7651 17.9123 15.6613 17.65 15.6613C17.3877 15.6613 17.136 15.7651 16.95 15.95C16.55 16.35 16.55 16.97 16.94 17.36Z" fill="#FEB139"/>
                                    </svg>                         
                            </div>
                            <p class="service__heading">Thiết kế Website</p>
                            <p class="service__des">Đi đầu công nghệ, dịch vụ thiết kế 
                                Website chuyên nghiệp của chúng
                                tôi giúp cho Doanh Nghiệp tìm được nhiều
                                khách hàng hơn, gia tăng doanh số.</p>
                            <div class="service__btn">
                                <div class="service__btn-icon">
                                    <i class="fa-solid fa-angle-right"></i>

                                </div>
                                <div class="service__btn-text">Chi Tiết</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}