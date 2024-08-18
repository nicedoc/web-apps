require([
    'common/main/lib/controller/ScreenReaderFocus',
    'common/main/lib/component/ComboBoxDataView',
    'common/main/lib/view/OptionsDialog',
    'common/main/lib/view/CopyWarningDialog',
    'common/main/lib/view/InsertTableDialog',
    'common/main/lib/view/SelectFileDlg',
    'common/main/lib/view/SymbolTableDialog',
    'common/main/lib/view/PasswordDialog',
    'common/main/lib/view/SignDialog',
    'common/main/lib/view/SignSettingsDialog',
    'common/main/lib/view/SaveAsDlg',
    'common/main/lib/view/AutoCorrectDialog',
    'common/main/lib/view/DocumentAccessDialog',
    'common/main/lib/view/SearchDialog',
    'common/main/lib/view/AdvancedSettingsWindow',
    'common/main/lib/view/PluginDlg',
    'common/main/lib/view/PluginPanel',
    'common/main/lib/view/ExtendedColorDialog',
    'common/main/lib/view/RenameDialog',
    'common/main/lib/view/ExternalEditor',
    'common/main/lib/view/ExternalDiagramEditor',
    'common/main/lib/view/ExternalMergeEditor',
    'common/main/lib/view/ExternalOleEditor',
    'common/main/lib/view/ShapeShadowDialog',
    'common/main/lib/view/CustomizeQuickAccessDialog',
    'common/main/lib/view/LanguageDialog',
    'common/main/lib/view/TextInputDialog',

    'documenteditor/main/app/view/ParagraphSettingsAdvanced',
    'documenteditor/main/app/view/ImageSettingsAdvanced',
    'documenteditor/main/app/view/TableSettingsAdvanced',
    'documenteditor/main/app/view/DropcapSettingsAdvanced',
    'documenteditor/main/app/view/StyleTitleDialog',
    'documenteditor/main/app/view/TableFormulaDialog',
    'documenteditor/main/app/view/TableToTextDialog',
    'documenteditor/main/app/view/TextToTableDialog',
    'documenteditor/main/app/view/WatermarkSettingsDialog',
    'documenteditor/main/app/view/RoleDeleteDlg',
    'documenteditor/main/app/view/RoleEditDlg',
    'documenteditor/main/app/view/RolesManagerDlg',
    'documenteditor/main/app/view/SaveFormDlg',
    'documenteditor/main/app/view/CaptionDialog',
    'documenteditor/main/app/view/NoteSettingsDialog',
    'documenteditor/main/app/view/HyperlinkSettingsDialog',
    'documenteditor/main/app/view/BookmarksDialog',
    'documenteditor/main/app/view/NotesRemoveDialog',
    'documenteditor/main/app/view/CrossReferenceDialog',
    'documenteditor/main/app/view/TableOfContentsSettings',
    'documenteditor/main/app/view/EditListItemDialog',
    'documenteditor/main/app/view/ControlSettingsDialog',
    'documenteditor/main/app/view/DateTimeDialog',
    'documenteditor/main/app/view/PageMarginsDialog',
    'documenteditor/main/app/view/PageSizeDialog',
    'documenteditor/main/app/view/CustomColumnsDialog',
    'documenteditor/main/app/view/ListSettingsDialog',
    'documenteditor/main/app/view/LineNumbersDialog',
    'documenteditor/main/app/view/HyphenationDialog',
    'documenteditor/main/app/view/CellsAddDialog',
    'documenteditor/main/app/view/NumberingValueDialog',
    'documenteditor/main/app/view/ListIndentsDialog',
    'documenteditor/main/app/view/ProtectDialog',
    'documenteditor/main/app/view/MailMergeEmailDlg'
], function () {
    Common.NotificationCenter.trigger('script:loaded');
});
