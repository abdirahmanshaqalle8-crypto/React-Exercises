import Header from "./Header";
import Post from "./Post";
import Footer from "./Footer";




// const Footer = ()=> {
//     return <h1>Footer Components</h1>
// }

// const WhyChooseUs = ()=> {
//     return <p>Why Choose Us Component ? Cause we are the best.</p>
// }

const Blog = () => {
    return (
        <div>
            <Header />
             <Post />
                {/* <main>Main Content
                    <WhyChooseUs />
                </main> */}
            <Footer />
        </div>
    )
}

export default Blog;
