import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-around items-center p-4 mx-4 border-b-4'>
             <h1 className='text-yellow-950 text-4xl font-bold'>React practice workshop : Knowledge cafe desire...</h1>
             <img src={profile} alt="" />
        </header>
    );
};

export default Header;