import React from 'react';

const ListOfTasks = () => {
    return (
        <div className='container card mt-2'>
            <div className='row border-bottom'>
                <h3 className='text-center'>የዘርፉ ኣስተባባሪ ዝርዝር ተግባራት</h3>
            </div>
            <div className='row'>
                <div className='col'>
                    <ul>
                        <li>የተነሺዎች የሶሽዮ-ኢኮኖሚ ፣ የካሳ እና ምትክ መረጃ መሰብሰብና ማደራጀት</li>
                        <li>የተነሺዎች ሰነድ ትክክለኛነት ማረጋገጥ</li>
                        <li>የተነሺዎች የካሳና ምትክ ተገቢነትን ማረጋገጥ</li>
                        <li>የልማት ተነሺዎችን መረጃ መሰብሰብ ፣ ብቤዝ ማፕና በዳታቤዝ ማደራጀትና ማስተላለፍ</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListOfTasks;