import ejs from 'ejs';


const  render  = async(view, data = {}) => {
    console.log('data', data);
    console.log('view', view);

    const body = await ejs.renderFile(`src/views${view}.ejs`, data);
    
    return await ejs.renderFile(`src/views/layouts/main.ejs`, {body});

}

export default render;