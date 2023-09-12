import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog)
    const { author, author_img, cover, hashtag, posted_date, reading_time, title } = blog
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-6'>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-lg font-semibold'>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time}</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a href=''> #{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;