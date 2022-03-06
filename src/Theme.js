function hexToRgb(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? parseInt(result[1], 16)+","+parseInt(result[2], 16)+","+parseInt(result[3], 16) : null;
}

function Theme(props){
    const themes = require('./themes.json');

    let theme_details = themes.find(choice => choice.theme == props.theme);
    let primary = theme_details.primary;
    let secondary = theme_details.secondary;
    let success = theme_details.success;
    let info = theme_details.info;
    let warning = theme_details.warning;
    let danger = theme_details.danger;
    let light = theme_details.light;
    let dark = theme_details.dark;

    let primary_rgb = hexToRgb(theme_details.primary);
    let secondary_rgb = hexToRgb(theme_details.secondary);
    let success_rgb = hexToRgb(theme_details.success);
    let info_rgb = hexToRgb(theme_details.info);
    let warning_rgb = hexToRgb(theme_details.warning);
    let danger_rgb = hexToRgb(theme_details.danger);
    let light_rgb = hexToRgb(theme_details.light);
    let dark_rgb = hexToRgb(theme_details.dark);

    return (
        <style type='text/css'>
            :root {`{`}
                --bs-primary:{primary};
                --bs-secondary:{secondary};
                --bs-success:{success};
                --bs-info:{info};
                --bs-warning:{warning};
                --bs-danger:{danger};
                --bs-light:{light};
                --bs-dark:{dark};
                --bs-primary-rgb:{primary_rgb};
                --bs-secondary-rgb:{secondary_rgb};
                --bs-success-rgb:{success_rgb};
                --bs-info-rgb:{info_rgb};
                --bs-warning-rgb:{warning_rgb};
                --bs-danger-rgb:{danger_rgb};
                --bs-light-rgb:{light_rgb};
                --bs-dark-rgb:{dark_rgb};
                {`}`}
        </style>
        );
}

export default Theme;