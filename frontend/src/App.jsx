const App = () => {
    if (window.location.pathname.startsWith('/admin')) {
        console.log("backend");
        // import('./assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.css');
        // import('./assets/backend/plugins/simplebar/css/simplebar.css');
        // import('./assets/backend/plugins/metismenu/css/metisMenu.min.css');
        // import('./assets/backend/css/bootstrap.min.css');
        // import('./assets/backend/css/bootstrap-extended.css');
        // import('./assets/backend/css/app.css');
        // import('./assets/backend/css/icons.css');
        // import('./assets/backend/css/dark-theme.css');
        // import('./assets/backend/css/semi-dark.css');
        // import('./assets/backend/css/header-colors.css');
        // js files
        // import('./assets/backend/js/bootstrap.bundle.min.js');
        // import('./assets/backend/js/jquery.min.js');
        // import('./assets/backend/plugins/simplebar/js/simplebar.min.js');
        // import('./assets/backend/plugins/metismenu/js/metisMenu.min.js');
        // import('./assets/backend/plugins/perfect-scrollbar/js/perfect-scrollbar.js')
        // import('./assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.min.js');
        // import('./assets/backend/plugins/vectormap/jquery-jvectormap-world-mill-en.js');
        // import('./assets/backend/plugins/chartjs/js/chart.js');
        // import('./assets/backend/js/index.js');
        import('./assets/backend/js/app.js');
    } else if (window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/forget-password' || window.location.pathname === '/reset-password/23hkjHJH21') {
        // import('./assets/backend/plugins/perfect-scrollbar/css/perfect-scrollbar.css');
        // import('./assets/backend/css/bootstrap.min.css');
        // import('./assets/backend/css/bootstrap-extended.css');
        // import('./assets/backend/css/app.css');
        // import('./assets/backend/css/icons.css');
    } else {
        console.log("frontend");
        import('./assets/frontend/css/main.css')
    }
}

export default App;
