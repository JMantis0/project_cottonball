module.exports = function(sequelize, DataTypes) {
    let CurrentWeather = sequelize.define( "CurrentWeather", {

        current_temp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        realFeel_temp: {
            type: DataTypes.INTEGER
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nearestStormDistance: {
            type: DataTypes.INTEGER  
        },
        precip_intensity: {
            type: DataTypes.INTEGER  
        },
        precip_probability: {
            type: DataTypes.INTEGER  
        },
        summary: {
            type: DataTypes.STRING,
        },
        temperature: {
            type: DataTypes.STRING,
        },
        time: {
            type: DataTypes.INTEGER  
        },
        uvIndex: {
            type: DataTypes.INTEGER    
        },
        visibility: {
            type: DataTypes.INTEGER  
        },
        windGust: {
            type: DataTypes.STRING,
        }





    });
    return CurrentWeather;
}