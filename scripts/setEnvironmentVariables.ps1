# Required to set environment variable when you want to run forge tunnel command.

# Set necessary environment variables.
[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_WORKSPACE_ID', '5c06fe4c-d9a6-4115-8910-aab050ebc8ff')

[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_PROJECT_ASSET_TYPE_ID', 8)

[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_TYPE_ID', 7)

[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_NAME_ATTRIBUTE_ID', 85)
[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_REQUEST_TYPE_ID_ATTRIBUTE_ID', 88)
[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_DESCRIPTION_ATTRIBUTE_ID', 89)
[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_LINK_ATTRIBUTE_ID', 90)
[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_ISSUE_TYPE_ID_ATTRIBUTE_ID', 91)
[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_SERVICE_DESK_ID_ATTRIBUTE_ID', 92)
[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_PORTAL_ATTRIBUTE_ID', 93)
[System.Environment]::SetEnvironmentVariable('FORGE_USER_VAR_REQUEST_TYPE_ASSET_PROJECT_ATTRIBUTE_ID', 101)

gci env:FORGE_USER_VAR_* | sort-object name