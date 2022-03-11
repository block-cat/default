import Dropdown from 'flarum/common/components/Dropdown';
import icon from 'flarum/helpers/icon';

export default class ImageDropdown extends Dropdown {
  oninit(vnode) {
    super.oninit(vnode);

    this.imageURL = this.attrs.imageURL;
  }

  view() {
    return (
      <div className={'ButtonGroup Dropdown dropdown ' + this.attrs.className + (this.showing ? ' open' : '')}>
        {icon('fas fa-info-circle', {
          className: 'Dropdown-toggle ' + this.attrs.buttonClassName,
          'aria-haspopup': "menu",
          'aria-label': this.attrs.accessibleToggleLabel,
          'data-toggle': "dropdown",
          onclick: this.attrs.onclick
        })}
        <div className={'Dropdown-menu dropdown-menu Dropdown-menu--left'}>
          <img src={this.imageURL}></img>
        </div>
      </div>
    );
  }
}