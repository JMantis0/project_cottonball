module.exports = function(sequelize, DataTypes) {
    let Weather = sequelize.define( "Weather", {

        current_temp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        realFeel_temp: {
            type: DataTypes.INTEGER
        },
        current_icon: {
            type: DataTypes.STRING,
            allowNull: true
        },
        current_nearestStormDistance: {
            type: DataTypes.INTEGER  
        },
        current_precip_intensity: {
            type: DataTypes.INTEGER  
        },
        current_precip_probability: {
            type: DataTypes.INTEGER  
        },
        current_summary: {
            type: DataTypes.STRING,
        },
        current_temperature: {
            type: DataTypes.STRING,
        },
        current_time: {
            type: DataTypes.INTEGER  
        },
        current_uvIndex: {
            type: DataTypes.INTEGER    
        },
        current_visibility: {
            type: DataTypes.INTEGER  
        },
        current_windGust: {
            type: DataTypes.STRING,
        },
        daily_apparent_temp_high: {
            type: DataTypes.INTEGER  
        },
        daily_apparent_temp_low: {
            type: DataTypes.INTEGER  
        },
        daily_icon: {
            type: DataTypes.STRING,
        },
        daily_icon: {
            type: DataTypes.STRING,
        },
        daily_precip_probability: {
            type: DataTypes.INTEGER  
        },
        daily_precip_type: {
            type: DataTypes.STRING,
        },
        daily_summary: {
            type: DataTypes.STRING,
        },
        daily_uv_index: {
            type: DataTypes.INTEGER  
        },
        daily_visibility: {
            type: DataTypes.INTEGER  
        }
    });
    return Weather;
}

//These are some preliminary weather code for the model. There is also hourly and minutely available.