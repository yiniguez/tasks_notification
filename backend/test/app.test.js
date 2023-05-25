import app from "../src/app.js";
import request from "supertest";
import axios from "axios";

describe("Get index success /", () => {
    test('Get status code 200 and body msg expected', async () => {
        const resp = await request(app).get("/").send();
        expect(resp.status).toBe(200);
        let bodyMsg = '{\n    "message": "Welcome to Notifications API"\n}';
        expect(resp.text).toBe(bodyMsg);
    });
});

describe('API Task Tests', () => {
    test('Get status code 200 and should return the init default list of tasks', async () => {
        const response = await axios.get('http://localhost:4000/tasks');
        expect(response.status).toBe(200);
        const tasks = response.data;
        expect(tasks).toHaveLength(3);
        expect(tasks[0].title).toBe('Task1');
        expect(tasks[1].title).toBe('Task2');
        expect(tasks[2].title).toBe('Task3');
    }, 10000);
});