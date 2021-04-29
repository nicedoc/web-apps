import React, {Fragment} from 'react';
import {NavLeft, NavRight, NavTitle, Link, Icon} from 'framework7-react';
import { Device } from '../../../../common/mobile/utils/device';
import EditorUIController from '../lib/patch'

const ToolbarView = props => {
    return (
        <Fragment>
            <NavLeft>
                {props.isShowBack && <Link className={`btn-doc-back${props.disabledControls && ' disabled'}`} icon='icon-back' onClick={props.onBack}></Link>}
                {Device.ios && props.isEdit && EditorUIController.getUndoRedo && EditorUIController.getUndoRedo({
                    disabledUndo: !props.isCanUndo,
                    disabledRedo: !props.isCanRedo,
                    onUndoClick: props.onUndo,
                    onRedoClick: props.onRedo
                })}
            </NavLeft>
            {!Device.phone && <NavTitle>{props.docTitle}</NavTitle>}
            <NavRight>
                {Device.android && props.isEdit && EditorUIController.getUndoRedo && EditorUIController.getUndoRedo({
                    disabledUndo: !props.isCanUndo,
                    disabledRedo: !props.isCanRedo,
                    onUndoClick: props.onUndo,
                    onRedoClick: props.onRedo
                })}
                {props.isEdit && EditorUIController.toolbarOptions && EditorUIController.toolbarOptions.getEditOptions({
                    disabled: props.disabledEditControls || props.disabledControls,
                    onEditClick: () => props.openOptions('edit'),
                    onAddClick: () => props.openOptions('add')
                })}
                { Device.phone ? null : <Link className={props.disabledControls && 'disabled'} icon='icon-search' searchbarEnable='.searchbar' href={false}></Link> }
                {props.displayCollaboration && window.matchMedia("(min-width: 390px)").matches ? <Link className={props.disabledControls && 'disabled'} id='btn-coauth' href={false} icon='icon-collaboration' onClick={() => props.openOptions('coauth')}></Link> : null}
                <Link className={(props.disabledSettings || props.disabledControls) && 'disabled'} id='btn-settings' icon='icon-settings' href={false} onClick={() => props.openOptions('settings')}></Link>
            </NavRight>
        </Fragment>
    )
};

export default ToolbarView;