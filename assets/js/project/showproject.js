const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

export var showProject = () => {
    const items = $$('.project__list-item')
    const root = $('.root')
    for(var i = 0; i < items.length; i++) {
        items[i].addEventListener('click',() => {
            root.innerHTML = `
            <div class="showProject">
            <div class="flex-center">
                <div class="push-6"></div>
                <div class="body-85">
                    <div class="showProject__list">
                        <div class="showProject__list-heading">
                            <div class="project__heading">Travira Air</div>
                            <div class="line"></div>
                            <div class="project__price">3.000.000 VNĐ</div>
                            <div class="project__star">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="content__product-btn">
                                <button style="margin: 1rem 0; width: 100%;">Tư vấn mẫu này</button>
                            </div>
                            <div class="content__product-btn">
                                <button style="margin: 1rem 0; width: 100%; background-color: var(--bgc-green);">Xem trước giao diện</button>
                            </div>
                        </div>
                        <div class="showProject__list-img">
                            <img src="./assets/img/project/showProject/Travira Air.png" alt="">  
                            <div class="list__img-bgc">
                            </div> 
                            <div class="list__img-icon">
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="showProject__des">
                        <div class="showProject__des-item">
                            <p>Giao diện của chúng tôi được thiết kế phù hợp cho shop/ cửa hàng kinh doanh nhiều sản phẩm với nhiều đa dạng danh mục hàng hóa. Giao diện có thể tùy chỉnh sử dụng cho nhiều ngành nghề khác nhau, giao diện đặc biệt thích hợp cho cửa hàng, siêu thị mẹ và bé, điện tử – điện máy, đồ gia dụng, hàng tiêu dùng ….
                            </p>
                            <p>Giao diện được thiết kế với bố cục hài hòa, bạn có thể thay đổi màu sắc cho giao diện tùy theo màu sắc đặc trưng của cửa hàng/ doanh nghiệp mà vẫn đảm bảo tính thẩm mỹ cho website</p>
                            <h4 class="des__item-heading">TÍNH NĂNG NỔI BẬT

                            </h4>
                            <ul>
                                <li>1. Thiết kế trình bày sản phẩm đa tầng, sản phẩm được trình bày rõ ràng đẹp mắt, giúp người mua dễ dàng chọn mua sản phẩm trên website</li>
                                <li>2. Giao diện được thiết kế tối ưu trên cả desktop, mobile và tablet, khách hàng sẽ có những trải nghiệm tuyệt vời khi mua hàng trên website của bạn</li>
                                <li>3. Menu đa cấp linh hoạt rất dễ sử dụng
                                </li>
                                <li>4. Giao diện đặc biệt quan tâm đến trải nghiệm người dùng, giúp bạn nâng cao được tỷ lệ mua hàng trên website bằng những nút mua hàng được thiết kế nổi bật, đi kèm là quy trình mua hàng online được tối ưu với các popup đặt hàng tinh tế, trang giỏ hàng được thiết kế tỷ mỉ theo tiêu chuẩn của các website hàng đầu
                                </li>
                            </ul>
                            <h4 class="des__item-heading">TẤT CẢ CÁC TÍNH NĂNG


                            </h4>
                            <ul>
                                <li>Thiết kế riêng cho shop kinh doanh nhiều danh mục, nhiều ngành hàng</li>
                                <li>Hỗ trợ tốt trên mọi thiết bị di động và trình duyệt mới nhất</li>
                                <li>Slider trình chiếu ảnh đẹp và bắt mắt
                                </li>
                                <li>Thiết lập giao diện đa dạng & mạnh mẽ
                                </li>
                                <li>Tích hợp chức năng gọi điện thoại trực tiếp trên mobile
                                </li>

                                <li>Thiết lập Font chữ / màu sắc cho giao diện dễ dàng</li>
                                <li>Tích hợp tính năng gợi ý sản phẩm liên quan
                                </li>
                                <li>Menu chính được thiết kế tinh tế trên di động</li>
                            </ul>
                        </div>
                        <div class="showProject__des-item">
                            <h3>NHÀ PHÁT TRIỂN GIAO DIỆN
                                LÊ MINH HIẾU </h3>
                            <div class="line"></div>
                            <div class="des__item-contact">
                                <div>
                                    <i class="fa-solid fa-user" style="margin-left: 1rem;"></i>
                                    <p>Liên hệ hỗ trợ</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-address-card"></i>
                                    <p>Điều khoản dịch vụ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="showProject__more">
                        <div class="showProject__more-heading">
                            <p>CÁC GIAO DIỆN KHÁC</p>
                            <div></div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        })
    }
}