import img1 from '../img/restaurantfood.jpg';
import img2 from '../img/greek salad.jpg';
import img3 from '../img/bruchetta.svg';
import img4 from '../img/lemon dessert.jpg';
import profilepic from '../img/profile.png';
import restaurant1 from '../img/restauranfood.jpg';
import restaurant2 from '../img/restaurant.jpg';

export default function Main(){
    return(
        <main>
            <section className='hero-section' id='hero'>
                <div className="hero-description">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button>
                        Reserve a Table
                    </button>
                </div>
                <div className="hero-image">
                    <img src={img1} alt="Restaurant" />
                </div>
            </section>
            <section className='highlights-section' id='highlights'>
                <div className="highlights-top">
                    <h1>This weeks specials!</h1>
                    <button>
                        Online Menu
                    </button>
                </div>
                <div className="highlights-cards">
                    <div className="card">
                        <img src={img2} alt="greek salad" />
                        <div className="card-title">
                            <h1>Greek Salad</h1>
                            <h2>$12.99</h2>
                        </div>
                        <div className="card-description">
                            The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style
                            feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </div>
                        <div className="card-order">
                            <a href='dfjfdj'>Order a delivery&nbsp;
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-delivery" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                                        <path d="M3 9l4 0"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img3} alt="Bruchetta" />
                        <div className="card-title">
                            <h1>Bruchetta</h1>
                            <h2>$5.99</h2>
                        </div>
                        <div className="card-description">
                            The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style
                            feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </div>
                        <div className="card-order">
                            <a href='fejhdf'>Order a delivery&nbsp;
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-delivery" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                                        <path d="M3 9l4 0"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img4} alt="Lemon Dessert" />
                        <div className="card-title">
                            <h1>Lemon Dessert</h1>
                            <h2>$5.00</h2>
                        </div>
                        <div className="card-description">
                            The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style
                            feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </div>
                        <div className="card-order">
                            <a href='fjdfj'>Order a delivery&nbsp;
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-delivery" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                                        <path d="M3 9l4 0"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='testimonials-section' id='testimonials'>
                <h1>Testimonials</h1>
                <div className="testimonials">
                    <div className="testimonial">
                        <h1>Rating</h1>
                        <div className="inline">
                            <img src={profilepic} alt="user" />
                            <h2>Name</h2>
                        </div>
                        <p className='review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum placeat praesentium commodi.
                        </p>
                    </div>
                    <div className="testimonial">
                        <h1>Rating</h1>
                        <div className="inline">
                            <img src={profilepic} alt="user" />
                            <h2>Name</h2>
                        </div>
                        <p className='review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum placeat praesentium commodi.
                        </p>
                    </div>
                    <div className="testimonial">
                        <h1>Rating</h1>
                        <div className="inline">
                            <img src={profilepic} alt="user" />
                            <h2>Name</h2>
                        </div>
                        <p className='review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum placeat praesentium commodi.
                        </p>
                    </div>
                    <div className="testimonial">
                        <h1>Rating</h1>
                        <div className="inline">
                            <img src={profilepic} alt="user" />
                            <h2>Name</h2>
                        </div>
                        <p className='review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum placeat praesentium commodi.
                        </p>
                    </div>
                </div>
            </section>
            <section className='about-section' id='about'>
                <div className="about-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minima pariatur laborum minus 
                        assumenda culpa corrupti facilis eum quas, quibusdam, modi accusantium quisquam provident ipsam illo 
                        quia beatae inventore animi.
                    </p>
                </div>
                <div className="about-imgs">
                    <img src={restaurant1} alt="Little Lemon" />
                    <img src={restaurant2} alt="Little Lemon" />
                </div>
            </section>
        </main>
    )
}