dotnet build Aether.Physics2D.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.sln /t:Build /p:Configuration=Release

dotnet build Aether.Physics2D.KNI.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.KNI.sln /t:Build /p:Configuration=Release

dotnet build Aether.Physics2D.MG.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.MG.sln /t:Build /p:Configuration=Release

@pause
