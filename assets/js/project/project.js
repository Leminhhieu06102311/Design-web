const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
import { showProject } from "./showproject.js"

export var projectHTML = () => {
    // class query root in html
    const root = $('.root')
    const project = $('#project')
    project.addEventListener('click', (e) => {
        root.innerHTML = `
        <div class="project">
            <div class="flex-center">
                <div class="push-6"></div>
                <div class="body-85">
                    <div class="content__heading">
                        <h2 class="content__heading-title">Dự Án Của Chúng Tôi</h2>
                        <p class="content__heading-des">Giúp cho Doanh Nghiệp sở hữu được Website chuyên nghiệp, đi đầu trong
                        lĩnh vực bán hàng Online. Cùng các giải pháp công nghệ khác qua các dịch vụ sau:</p>
                    </div>
                    <div class="content__project-list">
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_1.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">4.000.000 VNĐ</p>
                        </div>
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_2.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">38.000.000 VNĐ</p>
                        </div>
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_3.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">13.000.000 VNĐ</p>
                        </div>
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_4.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">8.000.000 VNĐ</p>
                        </div>
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_5.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">12.000.000 VNĐ</p>
                        </div>
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_6.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">7.000.000 VNĐ</p>
                        </div>
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_7.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">2.000.000 VNĐ</p>
                        </div>
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_8.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">6.000.000 VNĐ</p>
                        </div>
                        <div class="project__list-item">
                            <div class="list__item-img">
                            
                                <img src="./assets/img/project/img_9.png" alt="">
                            </div>
                            <div class="list__item-heading">Agency Landing Page</div>
                            <p class="list__item-price">8.000.000 VNĐ</p>
                        </div>
                        <div class="content__product-btn" style="text-align: center; width: 100%;">
                                <button>Xem Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        showProject()
    })
}