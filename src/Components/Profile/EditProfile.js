

function EditProfile() {


    return (
        <div>
            <div class="ui form">
            <div class="field">
                <label>Text</label>
                <textarea></textarea>
            </div>
            <div class="field">
                <label>Short Text</label>
                <textarea rows="2"></textarea>
            </div>
            <div class="field">
                <label>Card Type</label>
                <div class="ui selection dropdown">
                <input type="hidden" name="card[type]" />
                <div class="default text">Type</div>
                <i class="dropdown icon"></i>
                <div class="menu">
                    <div class="item" data-value="visa">
                    <i class="visa icon"></i>
                    Visa
                    </div>
                    <div class="item" data-value="amex">
                    <i class="amex icon"></i>
                    American Express
                    </div>
                    <div class="item" data-value="discover">
                    <i class="discover icon"></i>
                    Discover
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EditProfile