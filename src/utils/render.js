import ejs from 'ejs';


const  render  = async(view, data = {}) => {

    const body = await ejs.renderFile(`src/views${view}.ejs`, data);
    
    return await ejs.renderFile(`src/views/layouts/main.ejs`, {body});

}

export default render;