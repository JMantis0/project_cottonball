module.exports = function(sequelize, DataTypes) {
    let Trail = sequelize.define("Trail", {
        
        trail_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        name: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING   
        },
        state: {
            type: DataTypes.STRING
        },
        unique_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        activity_type_name: {
            type: DataTypes.STRING   
        },
        description: {
            type: DataTypes.STRING   
        },
        rating: {
            type: DataTypes.INTEGER
        }, 
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        },


    
    });

    return Trail;
}

