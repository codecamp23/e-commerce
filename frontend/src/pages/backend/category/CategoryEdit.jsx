import { useParams } from 'react-router-dom';

const CategoryEdit = () => {
    const {id} = useParams(); 
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        CategoryEdit{id}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryEdit;
