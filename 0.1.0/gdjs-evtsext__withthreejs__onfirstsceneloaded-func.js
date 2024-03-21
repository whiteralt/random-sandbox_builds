
if (typeof gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded = {};


gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.userFunc0x10c0be8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__WithThreeJS = new Map();
gdjs.__WithThreeJS.set("NoTHREE", typeof THREE != "object");
gdjs.__WithThreeJS.set("BuiltIn3D", (runtimeScene.getRenderer()._threeRenderer ? true : false));
if (gdjs.__WithThreeJS.get("NoTHREE")) {
  return;
}
//
THREE.Cache.enabled = true;// ローダーのためにキャッシュの有効化
//
gdjs.__WithThreeJS.set("SceneIsReady", false);
gdjs.__WithThreeJS.set("Blend2Dto3D", [THREE.NormalBlending, THREE.AdditiveBlending, THREE.MultiplyBlending, THREE.NormalBlending, THREE.SubtractiveBlending]);// PixiJSのSUBTRACTは28
if (THREE.REVISION == "152") {
  gdjs.__WithThreeJS.set("LightIntensityScale", 1);
  gdjs.__WithThreeJS.set("LightIntensityCandela", 1);
} else {
  // >= "160"
  gdjs.__WithThreeJS.set("LightIntensityScale", Math.PI);
  gdjs.__WithThreeJS.set("LightIntensityCandela", 10000);//適当
}
//
gdjs.__WithThreeJS.set("GetResourceFileName", function(ResourceName, Kind) {
  for (const V of gdjs.projectData.resources.resources) {
    if (V.name === ResourceName && V.kind === Kind) {
      return V.file;
    }
  }
});
//
gdjs.__WithThreeJS.set("SettingRecursiveTextures", function(Obj, Textures) {
  let TxNum = Textures.length;
  if (Obj.isMesh || Obj.isGroup || Obj.isObject3D) {
    if (Obj.material) {
      if (Array.isArray(Obj.material)) {
        for (let i = 0; i < Obj.material.length; i++) {
          if (i < TxNum && (Obj.material[i].map !== undefined)) {
            Obj.material[i].map = Textures[i];
          }
        }
      } else {
        if (Obj.material.map !== undefined) {
          Obj.material.map = Textures[0];
        }
      }
    }
    //
    for (let i = 0; i < Obj.children.length; i++) {
      gdjs.__WithThreeJS.get("SettingRecursiveTextures")(Obj.children[i], Textures);
    }
  }
});
//
gdjs.__WithThreeJS.set("GetModelInfo", function(Obj, T, Lv) {
  const Indent = " ".repeat(Lv * 2);
  T += Indent + "---\n";
  T += Indent + "Name: " + Obj.name + "\n";
  T += Indent + "Type: " + Obj.type + "\n";
  for (let i = 0; i < Obj.animations.length; i++) {
    T += Indent + "Animation " + i + ": " + Obj.animations[i].name + "\n";
  }
  if (Obj.material) {
    if (Array.isArray(Obj.material)) {
      for (let i = 0; i < Obj.material.length; i++) {
        T += Indent + "Material " + (i + 1) + ": " + Obj.material[i].name + "\n";
      }
    } else {
      T += Indent + "Material 1: " + Obj.material.name + "\n";
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    T = gdjs.__WithThreeJS.get("GetModelInfo")(Obj.children[i], T, Lv + 1);
  }
  return T;
});
//
/*
gdjs.__WithThreeJS.set("AllMaterialClone", function(Obj, Transparent, AlphaTest, Blend, Opacity) {
  if (Obj.material) {
    if (Array.isArray(Obj.material)) {
      for (let i = 0; i < Obj.material.length; i++) {
        const CloneMaterial = Obj.material[i].clone();
        Obj.material[i] = CloneMaterial;
        Obj.material[i].transparent = Transparent;
        Obj.material[i].alphaTest = AlphaTest;
        Obj.material[i].blending = Blend;
        Obj.material[i].opacity = Opacity;
      }
    } else {
      const CloneMaterial = Obj.material.clone();
      Obj.material = CloneMaterial;
      Obj.material.transparent = Transparent;
      Obj.material.alphaTest = AlphaTest;
      Obj.material.blending = Blend;
      Obj.material.opacity = Opacity;
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("AllMaterialClone")(Obj.children[i], Transparent, AlphaTest, Blend, Opacity);
  }
});
*/
// マテリアルのリストアップ
gdjs.__WithThreeJS.set("GetAllMaterials", function(Obj, Mats) {
  if (Obj.material) {
    if (Array.isArray(Obj.material)) {
      for (let i = 0; i < Obj.material.length; i++) {
        if (!Mats.has(Obj.material[i].uuid)) {
          Mats.set(Obj.material[i].uuid, Obj.material[i]);
        }
      }
    } else {
      if (!Mats.has(Obj.material.uuid)) {
        Mats.set(Obj.material.uuid, Obj.material);
      }
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("GetAllMaterials")(Obj.children[i], Mats);
  }
});
// マテリアルリストによる差し替え
gdjs.__WithThreeJS.set("ReplaceMaterial", function(Obj, Mats) {
  if (Obj.material) {
    if (Array.isArray(Obj.material)) {
      for (let i = 0; i < Obj.material.length; i++) {
        if (Mats.has(Obj.material[i].uuid)) {
          Obj.material[i] = Mats.get(Obj.material[i].uuid);
        }
      }
    } else {
      if (Mats.has(Obj.material.uuid)) {
        Obj.material = Mats.get(Obj.material.uuid);
      }
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("ReplaceMaterial")(Obj.children[i], Mats);
  }
});
//
gdjs.__WithThreeJS.set("GetAllObjectsName", function(Obj, T, Lv) {
  const Indent = " ".repeat(Lv * 2);
  T += Indent + "ID: " + Obj.name + "\n";
  //
  for (let i = 0; i < Obj.children.length; i++) {
    T = gdjs.__WithThreeJS.get("GetAllObjectsName")(Obj.children[i], T, Lv + 1);
  }
  return T;
});
//
gdjs.__WithThreeJS.set("AllMaterialDispose", function(Obj) {
  if (Obj.material) {
    if (Array.isArray(Obj.material)) {
      for (let i = Obj.material.length - 1; i >= 0; i--){
        Obj.material[i].dispose();
      }
    } else {
      Obj.material.dispose();
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("AllMaterialDispose")(Obj.children[i]);
  }
});
//
gdjs.__WithThreeJS.set("AllSoundsStop", function(Obj) {
  if (Obj.type === "Audio") {
    if (Obj.isPlaying) {
      Obj.stop();
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("AllSoundsStop")(Obj.children[i]);
  }
});
//
gdjs.__WithThreeJS.set("GetSingleRadian3", function(Obj) {
  /*
  XYZそれぞれ独立して求めているので、組み合わせて使用することはできない。
  例えば海老反り視点はこれで求めたXYZを組み合わせても再現できない。
  */
  const HalfPi = Math.PI / 2;/* Pi / 2 = 90度 */
  // X
  // オブジェクトの視点方向ベクトルと上方向ベクトルを作成
  const DirObj = new THREE.Vector3(0, 0, -1);
  DirObj.applyQuaternion(Obj.quaternion);
  const UpObj = new THREE.Vector3(0, 1, 0);
  UpObj.applyQuaternion(Obj.quaternion);
  // 頭を上に向けて視点方向ベクトルを向いている比較用のM4を作成
  const M4 = new THREE.Matrix4();
  M4.lookAt(new THREE.Vector3(), DirObj, new THREE.Vector3(0, 1, 0));
  // M4からQuaを作成し、さらに比較用の上方向ベクトルを作成
  const Qua = new THREE.Quaternion();
  Qua.setFromRotationMatrix(M4);
  const Up = new THREE.Vector3(0, 1, 0);
  Up.applyQuaternion(Qua);
  // 方向ベクトルを平面に投影したベクトルを作成
  const DirObjY0 = DirObj.clone();
  DirObjY0.y = 0;// DirObjY0.projectOnPlane(new THREE.Vector3(0, 1, 0));// y=0のほうが単純
  DirObjY0.normalize();
  // Xラジアン
  let RadX = DirObjY0.angleTo(DirObj);
  // 海老反り視点の場合（上方向と比較用上方向の差で90度オーバーしているかを判定）
  const UpToUp = UpObj.angleTo(Up);
  if (UpToUp >= HalfPi) {
    RadX = (HalfPi - RadX) + HalfPi;
  }
  // +-方向判定
  if (DirObj.y < 0) {
    RadX *= -1;
  }
  //
  // Y
  let RadY = new THREE.Vector3(0, 0, -1).angleTo(DirObjY0);
  if (DirObj.x > 0) {
    RadY *= -1;
  }
  //
  // Z
  let RadZ = UpToUp;
  // 外積と視点の角度差で+-を判断
  const Cross = new THREE.Vector3();
  Cross.crossVectors(UpObj, Up);
  if (Cross.angleTo(DirObj) >= HalfPi) {
    RadZ *= -1;
  }
  //
  return new THREE.Vector3(RadX, RadY, RadZ);
});
//
gdjs.__WithThreeJS.set("SetBoundingBoxCollisionResult", function(Obj1, Obj2) {
  if (!gdjs.__WithThreeJS.has("BoundingBoxCollisionResult")) {
      gdjs.__WithThreeJS.set("BoundingBoxCollisionResult", {});
  }
  const BoundingBoxCollisionResult = gdjs.__WithThreeJS.get("BoundingBoxCollisionResult");
  BoundingBoxCollisionResult.Hit = false;
  BoundingBoxCollisionResult.CenterX = 0;
  BoundingBoxCollisionResult.CenterY = 0;
  BoundingBoxCollisionResult.CenterZ = 0;
  BoundingBoxCollisionResult.SizeX = 0;
  BoundingBoxCollisionResult.SizeY = 0;
  BoundingBoxCollisionResult.SizeZ = 0;
  BoundingBoxCollisionResult.MoveX = 0;
  BoundingBoxCollisionResult.MoveY = 0;
  BoundingBoxCollisionResult.MoveZ = 0;
  //
  // geometryを持たない場合を回避。なぜかSpriteにはgeometryがある
  const Geo1 = Obj1.geometry;
  const Geo2 = Obj2.geometry;
  if (!Geo1 || !Geo2) {
      console.warn("Geometry not found.");
      return BoundingBoxCollisionResult;
  }
  //
  const Box1 = new THREE.Box3();
  const Box2 = new THREE.Box3();
  // Box1.setFromObject(Obj1, false);
  // Box2.setFromObject(Obj2, false);
  Obj1.updateMatrixWorld(true);//必要
  Obj2.updateMatrixWorld(true);//必要
  Box1.copy(Geo1.boundingBox).applyMatrix4(Obj1.matrixWorld);
  Box2.copy(Geo2.boundingBox).applyMatrix4(Obj2.matrixWorld);
  //
  const HitBox = Box1.clone();
  HitBox.intersect(Box2);
  if (HitBox.isEmpty()) {
      return BoundingBoxCollisionResult;
  }
  //
  const Box1Center = new THREE.Vector3();
  const Box2Center = new THREE.Vector3();
  const HitCenter = new THREE.Vector3();
  const HitSize = new THREE.Vector3();
  Box1.getCenter(Box1Center);
  Box2.getCenter(Box2Center);
  HitBox.getCenter(HitCenter);
  HitBox.getSize(HitSize);
  //
  let MoveValue = {x:0, y:0, z:0};
  if (HitSize.x <= HitSize.y && HitSize.x <= HitSize.z) {
      if (Box1Center.x > Box2Center.x) {
          MoveValue.x = HitSize.x;
      } else {
          MoveValue.x = HitSize.x * -1;
      }
  } else if (HitSize.y <= HitSize.x && HitSize.y <= HitSize.z) {
      if (Box1Center.y > Box2Center.y) {
          MoveValue.y = HitSize.y;
      } else {
          MoveValue.y = HitSize.y * -1;
      }
  } else if (HitSize.z <= HitSize.x && HitSize.z <= HitSize.y) {
      if (Box1Center.z > Box2Center.z) {
          MoveValue.z = HitSize.z;
      } else {
          MoveValue.z = HitSize.z * -1;
      }
  }
  //
  BoundingBoxCollisionResult.Hit = true;
  BoundingBoxCollisionResult.CenterX = HitCenter.x;
  BoundingBoxCollisionResult.CenterY = HitCenter.y;
  BoundingBoxCollisionResult.CenterZ = HitCenter.z;
  BoundingBoxCollisionResult.SizeX = HitSize.x;
  BoundingBoxCollisionResult.SizeY = HitSize.y;
  BoundingBoxCollisionResult.SizeZ = HitSize.z;
  BoundingBoxCollisionResult.MoveX = MoveValue.x;
  BoundingBoxCollisionResult.MoveY = MoveValue.y;
  BoundingBoxCollisionResult.MoveZ = MoveValue.z;
  return BoundingBoxCollisionResult;
});
//
gdjs.__WithThreeJS.set("GetCamera", function(Id) {
  const AllCams = gdjs.__WithThreeJS.get("AllCams");
  return AllCams.get("Camera" + gdjs.evtTools.common.clamp(Id, 1, 4));
});
//
gdjs.__WithThreeJS.set("SetAllOpacity", function(Obj, Operator, Opacity) {
  if (Obj.material) {
    if (Array.isArray(Obj.material)) {
      for (let i = 0; i < Obj.material.length; i++) {
        // Obj.material[i].transparent = (Obj.material[i].alphaTest !== 0 || Opacity !== 1);
        if (!Obj.material[i].transparent) {
          Obj.material[i].transparent = true;
          Obj.material[i].needsUpdate = true;
        }
        if (Operator == "=") {
          Obj.material[i].opacity = Opacity;
        } else if (Operator == "+") {
          Obj.material[i].opacity += Opacity;
        } else {
          Obj.material[i].opacity -= Opacity;
        }
        if (Obj.material[i].opacity < 0) Obj.material[i].opacity = 0;
        if (Obj.material[i].opacity > 1) Obj.material[i].opacity = 1;
      }
    } else {
      // Obj.material.transparent = (Obj.material.alphaTest !== 0 || Opacity !== 1);
      if (!Obj.material.transparent) {
        Obj.material.transparent = true;
        Obj.material.needsUpdate = true;
      }
      if (Operator == "=") {
        Obj.material.opacity = Opacity;
      } else if (Operator == "+") {
        Obj.material.opacity += Opacity;
      } else {
        Obj.material.opacity -= Opacity;
      }
      if (Obj.material.opacity < 0) Obj.material.opacity = 0;
      if (Obj.material.opacity > 1) Obj.material.opacity = 1;
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("SetAllOpacity")(Obj.children[i], Operator, Opacity);
  }
});
//
gdjs.__WithThreeJS.set("SetAllDepthWrite", function(Obj, Write) {
  if (Obj.material) {
    if (Array.isArray(Obj.material)) {
      for (let i = 0; i < Obj.material.length; i++) {
        Obj.material[i].depthWrite = Write;
      }
    } else {
      Obj.material.depthWrite = Write;
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("SetAllDepthWrite")(Obj.children[i], Write);
  }
});
//
gdjs.__WithThreeJS.set("AddSuffixToAllIds", function(Obj, Suffix) {
  // !Obj.isLight && !Obj.isLine && !Obj.isSkinnedMesh && !Obj.isBone
  // Obj.type != "Audio"
  if (!Obj.isCamera && !Obj.isScene) {
    Obj.name += Suffix;
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("AddSuffixToAllIds")(Obj.children[i], Suffix);
  }
});
//
gdjs.__WithThreeJS.set("SetAllBlendMode", function(Obj, Blend) {
  if (Obj.material) {
    if (Array.isArray(Obj.material)) {
      for (let i = 0; i < Obj.material.length; i++) {
        Obj.material[i].blending = Blend;
      }
    } else {
      Obj.material.blending = Blend;
    }
  }
  //
  for (let i = 0; i < Obj.children.length; i++) {
    gdjs.__WithThreeJS.get("SetAllBlendMode")(Obj.children[i], Blend);
  }
});


};
gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.userFunc0xc33930 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Custom
if (gdjs.__WithThreeJS.get("NoTHREE")) {
  return;
}
//
( function () {

	const _object_pattern = /^[og]\s*(.+)?/; // mtllib file_reference

	const _material_library_pattern = /^mtllib /; // usemtl material_name

	const _material_use_pattern = /^usemtl /; // usemap map_name

	const _map_use_pattern = /^usemap /;
	const _face_vertex_data_separator_pattern = /\s+/;

	const _vA = new THREE.Vector3();

	const _vB = new THREE.Vector3();

	const _vC = new THREE.Vector3();

	const _ab = new THREE.Vector3();

	const _cb = new THREE.Vector3();

	const _color = new THREE.Color();

	function ParserState() {

		const state = {
			objects: [],
			object: {},
			vertices: [],
			normals: [],
			colors: [],
			uvs: [],
			materials: {},
			materialLibraries: [],
			startObject: function ( name, fromDeclaration ) {

				// If the current object (initial from reset) is not from a g/o declaration in the parsed
				// file. We need to use it for the first parsed g/o to keep things in sync.
				if ( this.object && this.object.fromDeclaration === false ) {

					this.object.name = name;
					this.object.fromDeclaration = fromDeclaration !== false;
					return;

				}

				const previousMaterial = this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined;

				if ( this.object && typeof this.object._finalize === 'function' ) {

					this.object._finalize( true );

				}

				this.object = {
					name: name || '',
					fromDeclaration: fromDeclaration !== false,
					geometry: {
						vertices: [],
						normals: [],
						colors: [],
						uvs: [],
						hasUVIndices: false
					},
					materials: [],
					smooth: true,
					startMaterial: function ( name, libraries ) {

						const previous = this._finalize( false ); // New usemtl declaration overwrites an inherited material, except if faces were declared
						// after the material, then it must be preserved for proper MultiMaterial continuation.


						if ( previous && ( previous.inherited || previous.groupCount <= 0 ) ) {

							this.materials.splice( previous.index, 1 );

						}

						const material = {
							index: this.materials.length,
							name: name || '',
							mtllib: Array.isArray( libraries ) && libraries.length > 0 ? libraries[ libraries.length - 1 ] : '',
							smooth: previous !== undefined ? previous.smooth : this.smooth,
							groupStart: previous !== undefined ? previous.groupEnd : 0,
							groupEnd: - 1,
							groupCount: - 1,
							inherited: false,
							clone: function ( index ) {

								const cloned = {
									index: typeof index === 'number' ? index : this.index,
									name: this.name,
									mtllib: this.mtllib,
									smooth: this.smooth,
									groupStart: 0,
									groupEnd: - 1,
									groupCount: - 1,
									inherited: false
								};
								cloned.clone = this.clone.bind( cloned );
								return cloned;

							}
						};
						this.materials.push( material );
						return material;

					},
					currentMaterial: function () {

						if ( this.materials.length > 0 ) {

							return this.materials[ this.materials.length - 1 ];

						}

						return undefined;

					},
					_finalize: function ( end ) {

						const lastMultiMaterial = this.currentMaterial();

						if ( lastMultiMaterial && lastMultiMaterial.groupEnd === - 1 ) {

							lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
							lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
							lastMultiMaterial.inherited = false;

						} // Ignore objects tail materials if no face declarations followed them before a new o/g started.


						if ( end && this.materials.length > 1 ) {

							for ( let mi = this.materials.length - 1; mi >= 0; mi -- ) {

								if ( this.materials[ mi ].groupCount <= 0 ) {

									this.materials.splice( mi, 1 );

								}

							}

						} // Guarantee at least one empty material, this makes the creation later more straight forward.


						if ( end && this.materials.length === 0 ) {

							this.materials.push( {
								name: '',
								smooth: this.smooth
							} );

						}

						return lastMultiMaterial;

					}
				}; // Inherit previous objects material.
				// Spec tells us that a declared material must be set to all objects until a new material is declared.
				// If a usemtl declaration is encountered while this new object is being parsed, it will
				// overwrite the inherited material. Exception being that there was already face declarations
				// to the inherited material, then it will be preserved for proper MultiMaterial continuation.

				if ( previousMaterial && previousMaterial.name && typeof previousMaterial.clone === 'function' ) {

					const declared = previousMaterial.clone( 0 );
					declared.inherited = true;
					this.object.materials.push( declared );

				}

				this.objects.push( this.object );

			},
			finalize: function () {

				if ( this.object && typeof this.object._finalize === 'function' ) {

					this.object._finalize( true );

				}

			},
			parseVertexIndex: function ( value, len ) {

				const index = parseInt( value, 10 );
				return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

			},
			parseNormalIndex: function ( value, len ) {

				const index = parseInt( value, 10 );
				return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

			},
			parseUVIndex: function ( value, len ) {

				const index = parseInt( value, 10 );
				return ( index >= 0 ? index - 1 : index + len / 2 ) * 2;

			},
			addVertex: function ( a, b, c ) {

				const src = this.vertices;
				const dst = this.object.geometry.vertices;
				dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
				dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
				dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

			},
			addVertexPoint: function ( a ) {

				const src = this.vertices;
				const dst = this.object.geometry.vertices;
				dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );

			},
			addVertexLine: function ( a ) {

				const src = this.vertices;
				const dst = this.object.geometry.vertices;
				dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );

			},
			addNormal: function ( a, b, c ) {

				const src = this.normals;
				const dst = this.object.geometry.normals;
				dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
				dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
				dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

			},
			addFaceNormal: function ( a, b, c ) {

				const src = this.vertices;
				const dst = this.object.geometry.normals;

				_vA.fromArray( src, a );

				_vB.fromArray( src, b );

				_vC.fromArray( src, c );

				_cb.subVectors( _vC, _vB );

				_ab.subVectors( _vA, _vB );

				_cb.cross( _ab );

				_cb.normalize();

				dst.push( _cb.x, _cb.y, _cb.z );
				dst.push( _cb.x, _cb.y, _cb.z );
				dst.push( _cb.x, _cb.y, _cb.z );

			},
			addColor: function ( a, b, c ) {

				const src = this.colors;
				const dst = this.object.geometry.colors;
				if ( src[ a ] !== undefined ) dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
				if ( src[ b ] !== undefined ) dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
				if ( src[ c ] !== undefined ) dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

			},
			addUV: function ( a, b, c ) {

				const src = this.uvs;
				const dst = this.object.geometry.uvs;
				dst.push( src[ a + 0 ], src[ a + 1 ] );
				dst.push( src[ b + 0 ], src[ b + 1 ] );
				dst.push( src[ c + 0 ], src[ c + 1 ] );

			},
			addDefaultUV: function () {

				const dst = this.object.geometry.uvs;
				dst.push( 0, 0 );
				dst.push( 0, 0 );
				dst.push( 0, 0 );

			},
			addUVLine: function ( a ) {

				const src = this.uvs;
				const dst = this.object.geometry.uvs;
				dst.push( src[ a + 0 ], src[ a + 1 ] );

			},
			addFace: function ( a, b, c, ua, ub, uc, na, nb, nc ) {

				const vLen = this.vertices.length;
				let ia = this.parseVertexIndex( a, vLen );
				let ib = this.parseVertexIndex( b, vLen );
				let ic = this.parseVertexIndex( c, vLen );
				this.addVertex( ia, ib, ic );
				this.addColor( ia, ib, ic ); // normals

				if ( na !== undefined && na !== '' ) {

					const nLen = this.normals.length;
					ia = this.parseNormalIndex( na, nLen );
					ib = this.parseNormalIndex( nb, nLen );
					ic = this.parseNormalIndex( nc, nLen );
					this.addNormal( ia, ib, ic );

				} else {

					this.addFaceNormal( ia, ib, ic );

				} // uvs


				if ( ua !== undefined && ua !== '' ) {

					const uvLen = this.uvs.length;
					ia = this.parseUVIndex( ua, uvLen );
					ib = this.parseUVIndex( ub, uvLen );
					ic = this.parseUVIndex( uc, uvLen );
					this.addUV( ia, ib, ic );
					this.object.geometry.hasUVIndices = true;

				} else {

					// add placeholder values (for inconsistent face definitions)
					this.addDefaultUV();

				}

			},
			addPointGeometry: function ( vertices ) {

				this.object.geometry.type = 'Points';
				const vLen = this.vertices.length;

				for ( let vi = 0, l = vertices.length; vi < l; vi ++ ) {

					const index = this.parseVertexIndex( vertices[ vi ], vLen );
					this.addVertexPoint( index );
					this.addColor( index );

				}

			},
			addLineGeometry: function ( vertices, uvs ) {

				this.object.geometry.type = 'Line';
				const vLen = this.vertices.length;
				const uvLen = this.uvs.length;

				for ( let vi = 0, l = vertices.length; vi < l; vi ++ ) {

					this.addVertexLine( this.parseVertexIndex( vertices[ vi ], vLen ) );

				}

				for ( let uvi = 0, l = uvs.length; uvi < l; uvi ++ ) {

					this.addUVLine( this.parseUVIndex( uvs[ uvi ], uvLen ) );

				}

			}
		};
		state.startObject( '', false );
		return state;

	} //


	class OBJLoader extends THREE.Loader {

		constructor( manager ) {

			super( manager );
			this.materials = null;

		}

		load( url, onLoad, onProgress, onError ) {

			const scope = this;
			const loader = new THREE.FileLoader( this.manager );
			loader.setPath( this.path );
			loader.setRequestHeader( this.requestHeader );
			loader.setWithCredentials( this.withCredentials );
			loader.load( url, function ( text ) {

				try {

					onLoad( scope.parse( text ) );

				} catch ( e ) {

					if ( onError ) {

						onError( e );

					} else {

						console.error( e );

					}

					scope.manager.itemError( url );

				}

			}, onProgress, onError );

		}

		setMaterials( materials ) {

			this.materials = materials;
			return this;

		}

		parse( text ) {

			const state = new ParserState();

			if ( text.indexOf( '\r\n' ) !== - 1 ) {

				// This is faster than String.split with regex that splits on both
				text = text.replace( /\r\n/g, '\n' );

			}

			if ( text.indexOf( '\\\n' ) !== - 1 ) {

				// join lines separated by a line continuation character (\)
				text = text.replace( /\\\n/g, '' );

			}

			const lines = text.split( '\n' );
			let result = [];

			for ( let i = 0, l = lines.length; i < l; i ++ ) {

				const line = lines[ i ].trimStart();
				if ( line.length === 0 ) continue;
				const lineFirstChar = line.charAt( 0 ); // @todo invoke passed in handler if any

				if ( lineFirstChar === '#' ) continue;

				if ( lineFirstChar === 'v' ) {

					const data = line.split( _face_vertex_data_separator_pattern );

					switch ( data[ 0 ] ) {

						case 'v':
							state.vertices.push( parseFloat( data[ 1 ] ), parseFloat( data[ 2 ] ), parseFloat( data[ 3 ] ) );

							if ( data.length >= 7 ) {

								_color.setRGB( parseFloat( data[ 4 ] ), parseFloat( data[ 5 ] ), parseFloat( data[ 6 ] ) ).convertSRGBToLinear();

								state.colors.push( _color.r, _color.g, _color.b );

							} else {

								// if no colors are defined, add placeholders so color and vertex indices match
								state.colors.push( undefined, undefined, undefined );

							}

							break;

						case 'vn':
							state.normals.push( parseFloat( data[ 1 ] ), parseFloat( data[ 2 ] ), parseFloat( data[ 3 ] ) );
							break;

						case 'vt':
							state.uvs.push( parseFloat( data[ 1 ] ), parseFloat( data[ 2 ] ) );
							break;

					}

				} else if ( lineFirstChar === 'f' ) {

					const lineData = line.slice( 1 ).trim();
					const vertexData = lineData.split( _face_vertex_data_separator_pattern );
					const faceVertices = []; // Parse the face vertex data into an easy to work with format

					for ( let j = 0, jl = vertexData.length; j < jl; j ++ ) {

						const vertex = vertexData[ j ];

						if ( vertex.length > 0 ) {

							const vertexParts = vertex.split( '/' );
							faceVertices.push( vertexParts );

						}

					} // Draw an edge between the first vertex and all subsequent vertices to form an n-gon


					const v1 = faceVertices[ 0 ];

					for ( let j = 1, jl = faceVertices.length - 1; j < jl; j ++ ) {

						const v2 = faceVertices[ j ];
						const v3 = faceVertices[ j + 1 ];
						state.addFace( v1[ 0 ], v2[ 0 ], v3[ 0 ], v1[ 1 ], v2[ 1 ], v3[ 1 ], v1[ 2 ], v2[ 2 ], v3[ 2 ] );

					}

				} else if ( lineFirstChar === 'l' ) {

					const lineParts = line.substring( 1 ).trim().split( ' ' );
					let lineVertices = [];
					const lineUVs = [];

					if ( line.indexOf( '/' ) === - 1 ) {

						lineVertices = lineParts;

					} else {

						for ( let li = 0, llen = lineParts.length; li < llen; li ++ ) {

							const parts = lineParts[ li ].split( '/' );
							if ( parts[ 0 ] !== '' ) lineVertices.push( parts[ 0 ] );
							if ( parts[ 1 ] !== '' ) lineUVs.push( parts[ 1 ] );

						}

					}

					state.addLineGeometry( lineVertices, lineUVs );

				} else if ( lineFirstChar === 'p' ) {

					const lineData = line.slice( 1 ).trim();
					const pointData = lineData.split( ' ' );
					state.addPointGeometry( pointData );

				} else if ( ( result = _object_pattern.exec( line ) ) !== null ) {

					// o object_name
					// or
					// g group_name
					// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
					// let name = result[ 0 ].slice( 1 ).trim();
					const name = ( ' ' + result[ 0 ].slice( 1 ).trim() ).slice( 1 );
					state.startObject( name );

				} else if ( _material_use_pattern.test( line ) ) {

					// material
					state.object.startMaterial( line.substring( 7 ).trim(), state.materialLibraries );

				} else if ( _material_library_pattern.test( line ) ) {

					// mtl file
					state.materialLibraries.push( line.substring( 7 ).trim() );

				} else if ( _map_use_pattern.test( line ) ) {

					// the line is parsed but ignored since the loader assumes textures are defined MTL files
					// (according to https://www.okino.com/conv/imp_wave.htm, 'usemap' is the old-style Wavefront texture reference method)
					console.warn( 'THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.' );

				} else if ( lineFirstChar === 's' ) {

					result = line.split( ' ' ); // smooth shading
					// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
					// but does not define a usemtl for each face set.
					// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
					// This requires some care to not create extra material on each smooth value for "normal" obj files.
					// where explicit usemtl defines geometry groups.
					// Example asset: examples/models/obj/cerberus/Cerberus.obj

					/*
        	 * http://paulbourke.net/dataformats/obj/
        	 *
        	 * From chapter "Grouping" Syntax explanation "s group_number":
        	 * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
        	 * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
        	 * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
        	 * than 0."
        	 */

					if ( result.length > 1 ) {

						const value = result[ 1 ].trim().toLowerCase();
						state.object.smooth = value !== '0' && value !== 'off';

					} else {

						// ZBrush can produce "s" lines #11707
						state.object.smooth = true;

					}

					const material = state.object.currentMaterial();
					if ( material ) material.smooth = state.object.smooth;

				} else {

					// Handle null terminated files without exception
					if ( line === '\0' ) continue;
					console.warn( 'THREE.OBJLoader: Unexpected line: "' + line + '"' );

				}

			}

			state.finalize();
			const container = new THREE.Group();
			container.materialLibraries = [].concat( state.materialLibraries );
			const hasPrimitives = ! ( state.objects.length === 1 && state.objects[ 0 ].geometry.vertices.length === 0 );

			if ( hasPrimitives === true ) {

				for ( let i = 0, l = state.objects.length; i < l; i ++ ) {

					const object = state.objects[ i ];
					const geometry = object.geometry;
					const materials = object.materials;
					const isLine = geometry.type === 'Line';
					const isPoints = geometry.type === 'Points';
					let hasVertexColors = false; // Skip o/g line declarations that did not follow with any faces

					if ( geometry.vertices.length === 0 ) continue;
					const buffergeometry = new THREE.BufferGeometry();
					buffergeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( geometry.vertices, 3 ) );

					if ( geometry.normals.length > 0 ) {

						buffergeometry.setAttribute( 'normal', new THREE.Float32BufferAttribute( geometry.normals, 3 ) );

					}

					if ( geometry.colors.length > 0 ) {

						hasVertexColors = true;
						buffergeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( geometry.colors, 3 ) );

					}

					if ( geometry.hasUVIndices === true ) {

						buffergeometry.setAttribute( 'uv', new THREE.Float32BufferAttribute( geometry.uvs, 2 ) );

					} // Create materials


					const createdMaterials = [];

					for ( let mi = 0, miLen = materials.length; mi < miLen; mi ++ ) {

						const sourceMaterial = materials[ mi ];
						const materialHash = sourceMaterial.name + '_' + sourceMaterial.smooth + '_' + hasVertexColors;
						let material = state.materials[ materialHash ];

						if ( this.materials !== null ) {

							material = this.materials.create( sourceMaterial.name ); // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.

							if ( isLine && material && ! ( material instanceof THREE.LineBasicMaterial ) ) {

								const materialLine = new THREE.LineBasicMaterial();
								THREE.Material.prototype.copy.call( materialLine, material );
								materialLine.color.copy( material.color );
								material = materialLine;

							} else if ( isPoints && material && ! ( material instanceof THREE.PointsMaterial ) ) {

								const materialPoints = new THREE.PointsMaterial( {
									size: 10,
									sizeAttenuation: false
								} );
								THREE.Material.prototype.copy.call( materialPoints, material );
								materialPoints.color.copy( material.color );
								materialPoints.map = material.map;
								material = materialPoints;

							}

						}

						if ( material === undefined ) {

							if ( isLine ) {

								material = new THREE.LineBasicMaterial();

							} else if ( isPoints ) {

								material = new THREE.PointsMaterial( {
									size: 1,
									sizeAttenuation: false
								} );

							} else {

								// material = new THREE.MeshPhongMaterial();
								// material = new THREE.MeshBasicMaterial();// Custom
        						material = new THREE.MeshLambertMaterial();// Custom


							}

							material.name = sourceMaterial.name;
							// material.flatShading = sourceMaterial.smooth ? false : true;// Custom (MeshBasicMaterial)
							material.flatShading = sourceMaterial.smooth ? false : true;// Custom (MeshLambertMaterial)
							material.vertexColors = hasVertexColors;
							state.materials[ materialHash ] = material;

						}

						createdMaterials.push( material );

					} // Create mesh


					let mesh;

					if ( createdMaterials.length > 1 ) {

						for ( let mi = 0, miLen = materials.length; mi < miLen; mi ++ ) {

							const sourceMaterial = materials[ mi ];
							buffergeometry.addGroup( sourceMaterial.groupStart, sourceMaterial.groupCount, mi );

						}

						if ( isLine ) {

							mesh = new THREE.LineSegments( buffergeometry, createdMaterials );

						} else if ( isPoints ) {

							mesh = new THREE.Points( buffergeometry, createdMaterials );

						} else {

							mesh = new THREE.Mesh( buffergeometry, createdMaterials );

						}

					} else {

						if ( isLine ) {

							mesh = new THREE.LineSegments( buffergeometry, createdMaterials[ 0 ] );

						} else if ( isPoints ) {

							mesh = new THREE.Points( buffergeometry, createdMaterials[ 0 ] );

						} else {

							mesh = new THREE.Mesh( buffergeometry, createdMaterials[ 0 ] );

						}

					}

					mesh.geometry.computeBoundingBox();// Custom
					mesh.name = object.name;
					container.add( mesh );

				}

			} else {

				// if there is only the default parser state object with no geometry data, interpret data as point cloud
				if ( state.vertices.length > 0 ) {

					const material = new THREE.PointsMaterial( {
						size: 1,
						sizeAttenuation: false
					} );
					const buffergeometry = new THREE.BufferGeometry();
					buffergeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( state.vertices, 3 ) );

					if ( state.colors.length > 0 && state.colors[ 0 ] !== undefined ) {

						buffergeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( state.colors, 3 ) );
						material.vertexColors = true;

					}

					const points = new THREE.Points( buffergeometry, material );
					points.geometry.computeBoundingBox();// Custom
					container.add( points );

				}

			}

			return container;

		}

	}

	THREE.OBJLoader = OBJLoader;

} )();

};
gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{


gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.userFunc0x10c0be8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{



}


{


gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.userFunc0xc33930(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__WithThreeJS__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
