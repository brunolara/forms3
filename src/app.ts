import express, {Application, Request, Response} from 'express';
import {Form} from './models/Form'

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    const reuslt = await Form.findAll({
        include: ['entries']
    });

    return res.status(200).json(reuslt)
})

try {
    app.listen(3000, () => {
        console.log(`Server running on http://localhost:${3000}`)
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}
