import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from './'
import { Form } from './Form';

interface EntryAttributes {
    id: number;
    userId: number;
    formId: number;
    data: object;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface EntryInput extends Optional<EntryAttributes, 'id'> { }
export interface EntryOuput extends Required<EntryAttributes> { }


class EntryModel extends Model<EntryAttributes, EntryInput> implements EntryAttributes {
    public id!: number;
    public userId!: number;
    public formId!: number;
    public data!: object;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

const Entry = sequelize.define<EntryModel, EntryInput>('Entry', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    formId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data: {
        type: DataTypes.JSONB,
        allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    timestamps: true,
    tableName: 'entries',
    modelName: 'entry'
});

export { Entry }
