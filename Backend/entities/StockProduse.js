        import db from '../dbConfig.js'
        import  Sequelize  from 'sequelize'

        const StockProduse = db.define("StockProduse",
        {
            IdProdus:{
                type:Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            NumeProdus:{
                type: Sequelize.STRING,
                allowNull: false
            },
            PretProdus:{
                type: Sequelize.REAL,
                allowNull: false
            }

        })

        export default StockProduse;