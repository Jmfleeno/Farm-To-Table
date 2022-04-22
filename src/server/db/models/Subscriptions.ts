import { DataTypes } from 'sequelize';
import { db } from '../database';
import Farms from './Farms';

const Subscriptions = db.define('subscriptions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  season: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  tier: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  payment_option: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  farm_id: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false,
    references: { model: Farms, key: 'id' },
  },
  created_at: {
    type: DataTypes.DATE,
    unique: false,
    allowNull: false,
  },
});

export default Subscriptions;