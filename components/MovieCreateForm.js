import React, { useState } from 'react'

const MovieCreateForm = () => {
    const [form, setForm] = useState({
        name: 'padam',
        description: 'vimarsanam',
    })

    const handleChange = () => {
        const target = event.target;
        const name = target.name; //This gets updated everytime the input is selected and as value is provided

        setForm({
            ...form, //Destructurizing prev values from the form
            [name]: target.value, //=> key/which input is being updated(which is retrieved from the name) : 
            //[name] => denotes/addresses teh current input that's being updated, target.value => values entered in respective input
        })
    }

    return (
        <form>
            {JSON.stringify(form)}
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    onChange={handleChange}
                    value={form.name}
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Lord of the Rings"
                />
                {/* providing value attr, without an onChange handler, will cause input to be read only and can't enter values */}
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    onChange={handleChange}
                    value={form.description}
                    name="description"
                    type="text"
                    className="form-control"
                    id="description" placeholder="Somewhere in Middle-earth..."
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input
                    onChange={handleChange}
                    value={form.rating}
                    name="rating"
                    type="number"
                    max="5"
                    min="0"
                    className="form-control"
                    id="rating" placeholder="3"
                />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    onChange={handleChange}
                    value={form.image}
                    name="image"
                    type="text"
                    className="form-control"
                    id="image"
                    placeholder="http://....."
                />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input
                    onChange={handleChange}
                    value={form.cover}
                    name="cover"
                    type="text"
                    className="form-control"
                    id="cover"
                    placeholder="http://......"
                />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea
                    onChange={handleChange}
                    value={form.longDesc}
                    name="longDesc"
                    className="form-control"
                    id="longDesc"
                    rows="3"
                >

                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select multiple className="form-control" id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
        </form>
    )
}

export default MovieCreateForm