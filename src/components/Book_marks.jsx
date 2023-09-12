import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Book_marks = ({bookmarks, readingtime }) => {
    return (
        <div className="w-1/3 bg-gray-500 text-center ml-4 mt-2 pt-2 rounded-xl">
            <div>
                <h1 className='text-3xl'>Reading_time : {readingtime} min</h1>
            </div>
           <h2 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h2>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark ={bookmark}></Bookmark>)
           }
        </div>
    );
};

Book_marks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readingtime : PropTypes.number.isRequired
}
export default Book_marks;