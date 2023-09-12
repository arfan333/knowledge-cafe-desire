import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-slate-300 p-8 m-4 rounded-2xl'>
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired,
    
}
export default Bookmark;