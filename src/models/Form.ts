import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from './'
import { Entry } from './Entry';

interface FormAttributes {
    id: number;
    name: string;
    config: object;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface FormInput extends Optional<FormAttributes, 'id'> { }
export interface FormOuput extends Required<FormAttributes> { }


class FormModel extends Model<FormAttributes, FormInput> implements FormAttributes {
    public id!: number;
    public name!: string;
    public config!: object;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

FormModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    config: {
        type: DataTypes.JSONB,
        allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    timestamps: true,
    tableName: 'forms',
    sequelize
});

FormModel.hasMany(Entry, {
    foreignKey: 'formId',
    as: 'entries'
});

Entry.belongsTo(FormModel,{
    as: 'form'
})

export { FormModel as Form };
