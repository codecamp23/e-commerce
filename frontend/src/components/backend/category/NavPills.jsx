const NavPills = () => {
    return (
        <ul className="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link py-3 rounded-bottom-0 active" id="pills-english-tab" data-bs-toggle="pill" data-bs-target="#pills-english" type="button" role="tab" aria-controls="pills-english" aria-selected="true">English</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link py-3 rounded-bottom-0" id="pills-bangla-tab" data-bs-toggle="pill" data-bs-target="#pills-bangla" type="button" role="tab" aria-controls="pills-bangla" aria-selected="false">Bangla</button>
            </li>
        </ul>
    );
}

export default NavPills;
