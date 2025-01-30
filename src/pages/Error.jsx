import "../styles/Pages/ContentError.scss"
import ErrorNumber from '../components/Error/ErrorNumber'
import ErrorRedirection from '../components/Error/ErrorRedirection'




function Error() {
    return (
        
        <div className='contentError'>
     
            <ErrorNumber/>
            <ErrorRedirection />
          
        </div>
    )

}

export default Error
