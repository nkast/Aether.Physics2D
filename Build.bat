dotnet build Aether.Physics2D.NETSTANDARD2_0.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.NETSTANDARD2_0.sln /t:Build /p:Configuration=Release

dotnet build Aether.Physics2D.NET40.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.NET40.sln /t:Build /p:Configuration=Release

dotnet build Aether.Physics2D.NETSTANDARD2_0.KNI.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.NETSTANDARD2_0.KNI.sln /t:Build /p:Configuration=Release

dotnet build Aether.Physics2D.NET40.KNI.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.NET40.KNI.sln /t:Build /p:Configuration=Release

dotnet build Aether.Physics2D.NETSTANDARD2_0.MG.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.NETSTANDARD2_0.MG.sln /t:Build /p:Configuration=Release

dotnet build Aether.Physics2D.NET40.MG.sln /t:restore /p:Configuration=Release
dotnet build Aether.Physics2D.NET40.MG.sln /t:Build /p:Configuration=Release

@pause
